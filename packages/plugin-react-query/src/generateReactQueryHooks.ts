import type {
	OpenAPIObject,
	PathItemObject,
	OperationObject,
	ResponseObject,
	ReferenceObject,
} from 'openapi3-ts';
import type { PluginReturn, CodeOutput } from '@oa2ts/cli/plugin';
import { getParamsInPath, groupByParamType } from '@oa2ts/cli/pathHelpers';
import { isReferenceObject, createTypeDeclaration } from '@oa2ts/cli/codegen';

import type { Config } from './config.js';
import { getNameForResponse, getNameForType } from '@oa2ts/cli/nameHelpers';

const ALLOWED_VERBS: Array<keyof PathItemObject> = ['get', 'post', 'put', 'delete', 'patch'];

export function generateReactQueryHooks(
	config: Config,
): (spec: OpenAPIObject) => Promise<PluginReturn> {
	const useUseQueryForMutation = config?.overrides?.useUseQueryForMutation || [];

	return async (spec: OpenAPIObject): Promise<PluginReturn> => {
		const operationIds = new Set<string>();
		const pluginData: PluginReturn = { files: [], indexInclude: '' };

		Object.entries(spec.paths || {}).forEach(([route, routeObj]: [string, PathItemObject]) => {
			ALLOWED_VERBS.forEach((verb) => {
				const operation = routeObj[verb] as OperationObject;

				if (!operation) return;

				// check for operationId
				if (!operation.operationId) {
					throw new Error(
						`Every path must have a operationId - No operationId set for ${verb} ${route}`,
					);
				}

				// check if operationId is already used
				if (operationIds.has(operation.operationId)) {
					throw new Error(`"${operation.operationId}" is duplicated in your schema definition!`);
				}

				// mark operationId as used
				operationIds.add(operation.operationId);

				const useUseQuery =
					verb === 'get' || useUseQueryForMutation.includes(operation.operationId);
				const componentName = getNameForType(operation.operationId);
				const hookName = `use${componentName}`;
				const output: CodeOutput = { code: '', file: `hooks/${hookName}.ts` };

				if (useUseQuery) {
					output.code += 'import { useQuery } from "@tanstack/react-query"\n';
				} else {
					output.code += 'import { useMutation } from "@tanstack/react-query"\n';
				}

				const paramsInPath = getParamsInPath(route);

				const resolvedParams = [...(routeObj.parameters || []), ...(operation.parameters || [])]
					.map((param) => {
						if (isReferenceObject(param)) {
							// const ref = param.$ref.replace('#/components/parameters/', '');
							// if (spec.components && ref in spec.components) {
							// 	return spec.components[ref];
							// }

							throw new Error(`This version of plugin does not support parameter refs`);
						}

						return param;
					})
					.filter((p) => p);

				const groupedParams = groupByParamType(resolvedParams);

				// check for path params definitions
				paramsInPath.forEach((pathParam) => {
					const paramDef = groupedParams.path.find((p) => p.name === pathParam);

					if (!paramDef) {
						throw new Error(`Could not find parameter definition for ${pathParam} in ${route}`);
					}
				});

				const responseName = getNameForResponse(operation.operationId);
				const responseSchema: ResponseObject | ReferenceObject =
					operation.responses['200'] || operation.responses.default;

				if (responseSchema) {
					if (isReferenceObject(responseSchema)) {
						output.code += createTypeDeclaration(responseName, responseSchema);
						output.code += '\n';
					}
				}

				const hookCode = [
					`export function ${hookName}() {`,
					useUseQuery
						? `  return useQuery(["${operation.operationId}"])`
						: `  return useMutation()`,
					`}`,
				];

				output.code += hookCode.join('\n');

				pluginData.files.push(output);
				pluginData.indexInclude += `export { ${hookName} } from "./hooks/${hookName}";\n`;
			});
		});

		return pluginData;
	};
}
