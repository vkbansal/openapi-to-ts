import type { OpenAPIObject } from 'openapi3-ts';
import type { PluginReturn, CodeOutput, Plugin } from '@oa2ts/cli/plugin';
import { processPaths } from '@oa2ts/cli/pathHelpers';
import type { Codegen, ObjectProps } from '@oa2ts/cli/codegen';
import type { Config } from './config.js';
import { getNameForType } from '@oa2ts/cli/nameHelpers';
import { isReferenceObject } from '@oa2ts/cli/helpers';

const METHODS_WITH_BODY = ['post', 'put', 'patch'];

export function generateReactQueryHooks(config?: Config): Plugin['generate'] {
	return async (spec: OpenAPIObject, codegen: Codegen): Promise<PluginReturn> => {
		const files: CodeOutput[] = [];
		const includes: string[] = [];

		processPaths(spec, (route, verb, operation, params) => {
			// check for operationId
			if (!operation.operationId) {
				throw new Error(
					`Every path must have a operationId - No operationId set for ${verb} ${route}`,
				);
			}

			const useUseQuery = verb === 'get' || config?.overrides?.[operation.operationId]?.useQuery;
			const suffix = useUseQuery ? 'Query' : 'Mutation';

			const imports = new Set<string>();
			const typeName = getNameForType(operation.operationId);
			const hookName = `use${typeName}${suffix}`;
			const hookPropsName = `Use${typeName}${suffix}Props`;
			const requestBodyName = `Use${typeName}${suffix}RequestBody`;
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

			const pathParams = {
				name: `Use${typeName}${suffix}PathParams`,
				props: params.path.map(
					(param): ObjectProps => ({
						key: param.name,
						value: param.schema ? codegen.resolveValue(param.schema, imports) : 'unknown',
						comment: codegen.renderTemplate('comments.liquid', { schema: param.schema }),
						required: true,
					}),
				),
			};

			const queryParams = {
				name: `Use${typeName}${suffix}QueryParams`,
				props: params.query.map(
					(param): ObjectProps => ({
						key: param.name,
						value: param.schema ? codegen.resolveValue(param.schema, imports) : 'unknown',
						comment: codegen.renderTemplate('comments.liquid', { schema: param.schema }),
						required: !!param.required,
					}),
				),
			};

			const code = codegen.renderTemplate(
				useUseQuery ? 'useQueryHook.liquid' : 'useMutationHook.liquid',
				{
					hookName,
					hookPropsName,
					requestBodyName,
					bodyCode,
					route,
					verb,
					operation,
					params,
					pathParams,
					queryParams,
				},
			);

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

			includes.push(`export { ${hookName} } from './hooks/${hookName}';`);

			if (exportedTypes.length > 0) {
				includes.push(`export type { ${exportedTypes.join(', ')} } from './hooks/${hookName}'`);
			}

			files.push({
				code: codegen.renderTemplate('codeWithImports.liquid', {
					imports: [
						useUseQuery
							? 'import { useQuery } from "@tanstack/react-query"'
							: 'import { useMutation } from "@tanstack/react-query";',
						'',
						...imports,
					],
					code,
				}),
				file: `hooks/${hookName}.ts`,
			});
		});

		return { files, indexInclude: includes.join('\n') };
	};
}
