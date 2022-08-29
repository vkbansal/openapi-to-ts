import type { OpenAPIObject } from 'openapi3-ts';
import type { PluginReturn, CodeOutput, Plugin } from '@oa2ts/cli/plugin';
import { processPaths } from '@oa2ts/cli/pathHelpers';
import type { Codegen } from '@oa2ts/cli/codegen';

import { generateFetchCode } from './generateFetchCode.js';

export function generateFetchCalls(): Plugin['generate'] {
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

			files.push(generateFetchCode({ route, verb, operation, params }, includes, codegen));
		});

		return { files, indexInclude: includes.join('\n') };
	};
}
