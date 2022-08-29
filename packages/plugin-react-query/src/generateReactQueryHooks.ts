import type { OpenAPIObject } from 'openapi3-ts';
import type { PluginReturn, CodeOutput, Plugin } from '@oa2ts/cli/plugin';
import { processPaths } from '@oa2ts/cli/pathHelpers';
import type { Codegen } from '@oa2ts/cli/codegen';

import type { Config } from './config.js';
import { generateQueryHook } from './generateQueryHook.js';
import { generateMutationHook } from './generateMutationHook.js';

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

			files.push(
				useUseQuery
					? generateQueryHook({ route, verb, operation, params }, includes, codegen)
					: generateMutationHook({ route, verb, operation, params }, includes),
			);
		});

		return { files, indexInclude: includes.join('\n') };
	};
}
