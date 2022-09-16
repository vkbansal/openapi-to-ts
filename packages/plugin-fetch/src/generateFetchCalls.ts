import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

import { camelCase } from 'camel-case';
import type {
	OpenAPIObject,
	OperationObject,
	ParameterLocation,
	ParameterObject,
} from 'openapi3-ts';
import type { PluginReturn, CodeOutput, Plugin } from '@oa2ts/cli/plugin';
import { processPaths } from '@oa2ts/cli/pathHelpers';
import type { Codegen, ObjectProps } from '@oa2ts/cli/codegen';
import {
	getNameForType,
	getNameForPathParams,
	getNameForQueryParams,
	getNameForRequestBody,
} from '@oa2ts/cli/nameHelpers';
import { isReferenceObject } from '@oa2ts/cli/helpers';

import type { Config } from './config.js';

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));
const METHODS_WITH_BODY = ['post', 'put', 'patch'];

export interface ParamsCode {
	name: string;
	props: ObjectProps[];
}

export type FetchTemplateName = 'fetch';
export interface FetchTemplateProps {
	config?: Config;
	fnName: string;
	requestBodyName: string;
	propsName: string;
	bodyCode: string | null;
	route: string;
	verb: string;
	operation: OperationObject;
	params: Record<ParameterLocation, ParameterObject[]>;
	pathParams: ParamsCode;
	queryParams: ParamsCode;
}

declare module '@oa2ts/cli/codegen' {
	export interface RenderTemplate {
		(name: FetchTemplateName, data?: FetchTemplateProps): string;
	}
}

export function generateFetchCalls(config?: Config): Plugin['generate'] {
	return async function generate(spec: OpenAPIObject, codegen: Codegen): Promise<PluginReturn> {
		const files: CodeOutput[] = [];
		const includes: string[] = [];

		processPaths(spec, (route, verb, operation, params) => {
			// check for operationId
			if (!operation.operationId) {
				throw new Error(
					`Every path must have a operationId - No operationId set for ${verb} ${route}`,
				);
			}

			const imports = new Set<string>();
			const fnName = camelCase(operation.operationId);
			const typeName = getNameForType(operation.operationId);
			const propsName = `${typeName}Props`;
			const requestBodyName = getNameForRequestBody(operation.operationId);
			let bodyCode: string | null = null;

			if (METHODS_WITH_BODY.includes(verb) && operation.requestBody) {
				if (isReferenceObject(operation.requestBody)) {
					//
				} else {
					const mediaObj =
						operation.requestBody.content['application/json'] ||
						operation.requestBody.content['application/octet-stream'] ||
						operation.requestBody.content['default'];
					if (mediaObj && mediaObj.schema) {
						const resolvedValue = isReferenceObject(mediaObj.schema)
							? codegen.createTypeDeclaration(requestBodyName, mediaObj.schema)
							: codegen.createInterface(requestBodyName, mediaObj.schema);
						if (resolvedValue.code) {
							bodyCode = resolvedValue.code;

							resolvedValue.imports.forEach((i) => imports.add(i));
						}
					}
				}
			}

			const pathParams = {
				name: getNameForPathParams(operation.operationId),
				props: params.path.map(
					(param): ObjectProps => ({
						key: param.name,
						value: param.schema ? codegen.resolveValue(param.schema, imports) : 'unknown',
						comment: codegen.renderTemplate('comments', { schema: param.schema }),
						required: true,
					}),
				),
			};

			const queryParams = {
				name: getNameForQueryParams(operation.operationId),
				props: params.query.map(
					(param): ObjectProps => ({
						key: param.name,
						value: param.schema ? codegen.resolveValue(param.schema, imports) : 'unknown',
						comment: codegen.renderTemplate('comments', { schema: param.schema }),
						required: !!param.required,
					}),
				),
			};

			const code = codegen.renderTemplate('fetch', {
				config,
				fnName,
				requestBodyName,
				propsName,
				bodyCode,
				route,
				verb,
				operation,
				params,
				pathParams,
				queryParams,
			});

			const exportedTypes = [];

			if (pathParams.props.length > 0) {
				exportedTypes.push(pathParams.name);
			}

			if (queryParams.props.length > 0) {
				exportedTypes.push(queryParams.name);
			}

			if (bodyCode) {
				exportedTypes.push(requestBodyName);
			}

			includes.push(`export { ${fnName} } from './fetch/${fnName}'`);

			if (exportedTypes.length > 0) {
				includes.push(`export type { ${exportedTypes.join(', ')} } from './fetch/${fnName}'`);
			}

			files.push({
				code: codegen.renderTemplate('codeWithImports', { imports, code }),
				file: `./fetch/${fnName}.ts`,
			});
		});

		if (!config?.customFetcher) {
			files.push({
				code: fs.readFileSync(path.resolve(DIR_NAME, 'fetcher.ts'), 'utf8'),
				file: './fetch/fetcher.ts',
			});
		}

		return { files, indexInclude: includes.join('\n') };
	};
}
