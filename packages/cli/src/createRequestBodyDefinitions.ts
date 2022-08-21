import type {
	ComponentsObject,
	ReferenceObject,
	SchemaObject,
	RequestBodyObject,
} from 'openapi3-ts';

import { createInterface, createTypeDeclaration, isReferenceObject } from './codegen.js';
import { getNameForRequestBody } from './nameHelpers.js';
import type { CodeOutput, PluginReturn } from './plugin.js';

export function getRequestResponseSchema(
	schema: RequestBodyObject | ReferenceObject,
): ReferenceObject | SchemaObject | undefined {
	if (isReferenceObject(schema)) {
		return schema;
	}

	if (schema.content) {
		const content = Object.entries(schema.content).find(
			([mediaType, contentObj]) =>
				mediaType.startsWith('*/*') ||
				mediaType.startsWith('application/json') ||
				(mediaType.startsWith('application/octet-stream') && contentObj.schema),
		);

		return content?.[1].schema;
	}
}

export function createRequestBodyDefinitions(
	schemas: ComponentsObject['requestBodies'] = {},
): PluginReturn {
	const files: CodeOutput[] = [];
	const includes: string[] = [];
	const data = Object.entries(schemas);

	data.forEach(([name, schema]) => {
		const finalName = getNameForRequestBody(name);
		let code = '';

		const response = getRequestResponseSchema(schema);

		if (!response) {
			return;
		}

		if (
			!isReferenceObject(response) &&
			(!response.type || response.type === 'object') &&
			!response.allOf &&
			!response.oneOf &&
			!response.nullable
		) {
			code = createInterface(finalName, response);
		} else {
			code = createTypeDeclaration(finalName, response);
		}

		files.push({ code, file: `requestBodies/${finalName}.ts` });
		includes.push(`export { ${finalName} } from './requestBodies/${finalName}';`);
	});

	return { files, indexInclude: includes.join('\n') };
}
