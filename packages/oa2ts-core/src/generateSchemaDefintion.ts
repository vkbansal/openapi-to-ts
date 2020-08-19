import ts from 'typescript';
import type { ComponentsObject } from 'openapi3-ts';

import type { TupleWithDependencies } from './helpers';
import { isReferenceObject } from './helpers';
import generateInterface from './generateInterface';
import generateTypeDeclaration from './generateTypeDeclaration';

export default function generateSchemaDefintion(
  schemas: ComponentsObject['schemas'] = {}
): Array<TupleWithDependencies<ts.Statement>> {
  const data = Object.entries(schemas);

  if (data.length === 0) return [];

  return data.map(([name, schema]) => {
    if (
      !isReferenceObject(schema) &&
      (!schema.type || schema.type === 'object') &&
      !schema.allOf &&
      !schema.oneOf &&
      !schema.nullable
    ) {
      return generateInterface(name, schema);
    } else {
      return generateTypeDeclaration(name, schema);
    }
  });
}
