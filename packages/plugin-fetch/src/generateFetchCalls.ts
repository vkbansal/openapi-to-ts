import type { OpenAPIObject } from 'openapi3-ts';
import type { PluginReturn, CodeOutput } from '@oa2ts/cli/plugin';
import { processPaths } from '@oa2ts/cli/pathHelpers';

import { generateFetchCode } from './generateFetchCode.js';

export function generateFetchCalls(): (spec: OpenAPIObject) => Promise<PluginReturn> {
	return async (spec: OpenAPIObject): Promise<PluginReturn> => {
		const files: CodeOutput[] = [];
		const includes: string[] = [];

		processPaths(spec, (route, verb, operation, params) => {
			// check for operationId
			if (!operation.operationId) {
				throw new Error(
					`Every path must have a operationId - No operationId set for ${verb} ${route}`,
				);
			}

			files.push(generateFetchCode({ route, verb, operation, params }, includes));
		});

		return { files, indexInclude: includes.join('\n') };
	};
}
