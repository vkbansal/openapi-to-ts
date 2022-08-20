import type { ComponentsObject } from 'openapi3-ts';
import {
	createInterface,
	createTypeDeclaration,
	getNameForType,
	isReferenceObject,
} from './codegen.js';
import type { CodeOutput, PluginReturn } from './config.js';

export function createSchemaDefinitions(schemas: ComponentsObject['schemas'] = {}): PluginReturn {
	const files: CodeOutput[] = [];
	const includes: string[] = [];
	const data = Object.entries(schemas);

	data.forEach(([name, schema]) => {
		const finalName = getNameForType(name);
		let code = '';

		if (
			!isReferenceObject(schema) &&
			(!schema.type || schema.type === 'object') &&
			!schema.allOf &&
			!schema.oneOf &&
			!schema.nullable
		) {
			code = createInterface(name, schema);
		} else {
			code = createTypeDeclaration(name, schema);
		}

		files.push({ code, file: `schemas/${finalName}.ts` });
		includes.push(`export { ${finalName} } from './schemas/${finalName}';`);
	});

	return { files, indexInclude: includes.join('\n') };
}
