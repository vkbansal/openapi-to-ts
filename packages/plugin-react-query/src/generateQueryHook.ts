import type { OperationObject, ParameterLocation, ParameterObject } from 'openapi3-ts';
import type { CodeOutput } from '@oa2ts/cli/plugin';
import {
	getNameForType,
	getNameForPathParams,
	getNameForQueryParams,
	getNameForRequestBody,
} from '@oa2ts/cli/nameHelpers';
import type { Codegen, ObjectProps } from '@oa2ts/cli/codegen';
import { isReferenceObject } from '@oa2ts/cli/helpers';

export interface GenerateQueryHookProps {
	route: string;
	verb: string;
	operation: OperationObject;
	params: Record<ParameterLocation, ParameterObject[]>;
}

const METHODS_WITH_BODY = ['post', 'put', 'patch'];

export function generateQueryHook(
	props: GenerateQueryHookProps,
	indexInclude: string[],
	codegen: Codegen,
): CodeOutput {
	const { route, verb, operation, params } = props;

	// check for operationId
	if (!operation.operationId) {
		throw new Error(`Every path must have a operationId - No operationId set for ${verb} ${route}`);
	}

	const imports = new Set<string>();
	const typeName = getNameForType(operation.operationId);
	const hookName = `use${typeName}Query`;
	const hookPropsName = `Use${typeName}QueryProps`;
	const requestBodyName = getNameForRequestBody(operation.operationId);
	let bodyCode: string | null = null;

	if (METHODS_WITH_BODY.includes(verb) && operation.requestBody) {
		if (isReferenceObject(operation.requestBody)) {
			//
		} else {
			const mediaObj =
				operation.requestBody.content['application/json'] ||
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
	indexInclude.push(`export { ${hookName} } from './hooks/${hookName}';`);

	const code = codegen.renderTemplate('useQueryHook.liquid', {
		hookName,
		hookPropsName,
		requestBodyName,
		bodyCode,
		route,
		verb,
		operation,
		params,
		pathParams: {
			name: getNameForPathParams(operation.operationId),
			props: params.path.map(
				(param): ObjectProps => ({
					key: param.name,
					value: param.schema ? codegen.resolveValue(param.schema, imports) : 'unknown',
					comment: codegen.renderTemplate('comments.liquid', { schema: param.schema }),
					required: true,
				}),
			),
		},
		queryParams: {
			name: getNameForQueryParams(operation.operationId),
			props: params.query.map(
				(param): ObjectProps => ({
					key: param.name,
					value: param.schema ? codegen.resolveValue(param.schema, imports) : 'unknown',
					comment: codegen.renderTemplate('comments.liquid', { schema: param.schema }),
					required: !!param.required,
				}),
			),
		},
	});

	return {
		code: codegen.renderTemplate('codeWithImports.liquid', { imports, code }),
		file: `hooks/${hookName}.ts`,
	};
}
