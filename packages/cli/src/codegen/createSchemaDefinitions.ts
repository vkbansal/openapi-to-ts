import type { ComponentsObject } from 'openapi3-ts';

import { getNameForType, isReferenceObject } from './utils';
import type { CodeOutput, PluginReturn } from '../config';
import { createInterface } from './createInterface';

export async function createSchemaDefinitions(
  schemas: ComponentsObject['schemas'] = {}
): Promise<PluginReturn> {
  const files: CodeOutput[] = [];
  const data = Object.entries(schemas);
  const includes: string[] = [];

  for (const [name, schema] of data) {
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
      code = '';

      // definitionsMap.set(finalName, {
      //   ...createTypeDeclaration(finalName, schema)
      // });
    }

    files.push({ code, file: `schemas/${finalName}.ts` });
    includes.push(`export { ${finalName} } from './schemas/${finalName}';`);
  }

  return { files, include: includes.join('\n') };
}
