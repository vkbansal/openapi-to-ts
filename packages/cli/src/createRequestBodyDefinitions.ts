import type {
  ComponentsObject,
  ReferenceObject,
  SchemaObject,
  RequestBodyObject
} from 'openapi3-ts';

import {
  createInterface,
  createTypeDeclaration,
  getNameForType,
  isReferenceObject
} from './codegen';
import type { CodeOutput, PluginReturn } from './config';

export function getRequestResponseSchema(
  schema: RequestBodyObject | ReferenceObject
): ReferenceObject | SchemaObject | undefined {
  if (isReferenceObject(schema)) {
    return schema;
  }

  if (schema.content) {
    const content = Object.entries(schema.content).find(
      ([mediaType, contentObj]) =>
        mediaType.startsWith('*/*') ||
        mediaType.startsWith('application/json') ||
        (mediaType.startsWith('application/octet-stream') && contentObj.schema)
    );

    return content?.[1].schema;
  }
}

export function createRequestBodyDefinitions(
  schemas: ComponentsObject['requestBodies'] = {}
): PluginReturn {
  const files: CodeOutput[] = [];
  const includes: string[] = [];
  const data = Object.entries(schemas);

  data.forEach(([name, schema]) => {
    const finalName = getNameForType(name);
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
      code = createInterface(name, response);
    } else {
      code = createTypeDeclaration(name, response);
    }

    files.push({ code, file: `schemas/${finalName}.ts` });
    includes.push(`export { ${finalName} } from './schemas/${finalName}';`);
  });

  return { files, indexInclude: includes.join('\n') };
}
