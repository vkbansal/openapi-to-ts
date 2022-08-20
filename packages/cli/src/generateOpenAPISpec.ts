import type { OpenAPIObject } from 'openapi3-ts';

import { createSchemaDefinitions } from './createSchemaDefinitions.js';
import type { PluginReturn, Plugin } from './config.js';
import { logInfo } from './helpers.js';
import { createRequestBodyDefinitions } from './createRequestBodyDefinitions.js';

export async function generateOpenAPISpec(
	spec: OpenAPIObject,
	plugins?: Plugin[],
): Promise<PluginReturn> {
	const allData: PluginReturn = { files: [], indexInclude: '' };

	if (spec.components?.schemas) {
		logInfo('Generating schema definitions');
		const schemaDefs = createSchemaDefinitions(spec.components.schemas);
		allData.files.push(...schemaDefs.files);

		if (schemaDefs.indexInclude) {
			allData.indexInclude += schemaDefs.indexInclude;
			allData.indexInclude += '\n';
		}
	}

	if (spec.components?.requestBodies) {
		logInfo('Generating request body definitions');
		const requestBodyDefs = createRequestBodyDefinitions(spec.components.requestBodies);

		allData.files.push(...requestBodyDefs.files);

		if (requestBodyDefs.indexInclude) {
			allData.indexInclude += requestBodyDefs.indexInclude;
			allData.indexInclude += '\n';
		}
	}

	if (Array.isArray(plugins)) {
		for (const plugin of plugins) {
			logInfo(`Executing plugin: ${plugin.name}`);
			const pluginData = await plugin.generate(spec);

			allData.files.push(...pluginData.files);

			if (pluginData.indexInclude) {
				allData.indexInclude += pluginData.indexInclude;
				allData.indexInclude += '\n';
			}
		}
	}

	return allData;
}
