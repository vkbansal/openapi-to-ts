import type { OpenAPIObject } from 'openapi3-ts';
import type { PluginReturn, CodeOutput, Plugin } from '@oa2ts/cli/plugin';
import { processPaths } from '@oa2ts/cli/pathHelpers';
// import { isReferenceObject, createTypeDeclaration } from '@oa2ts/cli/codegen';
// import { getNameForResponse, getNameForType } from '@oa2ts/cli/nameHelpers';
import type { Codegen } from '@oa2ts/cli/codegen';

import type { Config } from './config.js';
import { generateQueryHook } from './generateQueryHook.js';
import { generateMutationHook } from './generateMutationHook.js';

export function generateReactQueryHooks(config?: Config): Plugin['generate'] {
	const useUseQueryForMutation = config?.overrides?.useUseQueryForMutation || [];

	return async (spec: OpenAPIObject, _codegen: Codegen): Promise<PluginReturn> => {
		const files: CodeOutput[] = [];
		const includes: string[] = [];

		// const responseName = getNameForResponse(operation.operationId);
		// 		const responseSchema: ResponseObject | ReferenceObject =
		// 			operation.responses['200'] || operation.responses.default;

		// 		if (responseSchema) {
		// 			if (isReferenceObject(responseSchema)) {
		// 				output.code += createTypeDeclaration(responseName, responseSchema);
		// 				output.code += '\n';
		// 			}
		// 		}

		processPaths(spec, (route, verb, operation, params) => {
			// check for operationId
			if (!operation.operationId) {
				throw new Error(
					`Every path must have a operationId - No operationId set for ${verb} ${route}`,
				);
			}
			const useUseQuery = verb === 'get' || useUseQueryForMutation.includes(operation.operationId);

			files.push(
				useUseQuery
					? generateQueryHook({ route, verb, operation, params }, includes)
					: generateMutationHook({ route, verb, operation, params }, includes),
			);
		});

		return { files, indexInclude: includes.join('\n') };
	};
}
