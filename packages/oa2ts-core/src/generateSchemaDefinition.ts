import type { ComponentsObject } from 'openapi3-ts';
import _ from 'lodash';
import type { ObjectWithDependencies } from '@vkbansal/oa2ts-utils';
import { isReferenceObject } from '@vkbansal/oa2ts-utils';

import generateInterface from './generateInterface';
import generateTypeDeclaration from './generateTypeDeclaration';

export function generateSchemaDefinition(
  schemas: ComponentsObject['schemas'] = {}
): Map<string, ObjectWithDependencies> {
  const data = Object.entries(schemas);
  const definitionsMap = new Map<string, ObjectWithDependencies>();

  if (data.length > 0) {
    _.sortBy(data, ([name]) => name).forEach(([name, schema]) => {
      if (
        !isReferenceObject(schema) &&
        (!schema.type || schema.type === 'object') &&
        !schema.allOf &&
        !schema.oneOf &&
        !schema.nullable
      ) {
        definitionsMap.set(name, generateInterface(name, schema));
      } else {
        definitionsMap.set(name, generateTypeDeclaration(name, schema));
      }
    });
  }

  return definitionsMap;
}
