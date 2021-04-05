import ts from 'typescript';
import type { SchemaObject } from 'openapi3-ts';
import type { ObjectWithDependencies } from '@vkbansal/oa2ts-utils';
import { mapWithDeps, transformType, isReferenceObject } from '@vkbansal/oa2ts-utils';

import getRef from './getRef';
import getObjectProperties from './getObjectProperties';
import resolveValue from './resolveValue';

export default function getObject(item: SchemaObject): ObjectWithDependencies<ts.TypeNode> {
  if (isReferenceObject(item)) {
    return getRef(item.$ref);
  }

  if (item.allOf) {
    const mappedValues = mapWithDeps(item.allOf, resolveValue);

    return transformType(mappedValues, typeNode => ts.factory.createIntersectionTypeNode(typeNode));
  }

  if (item.oneOf) {
    const mappedValues = mapWithDeps(item.oneOf, resolveValue);

    return transformType(mappedValues, typeNode => ts.factory.createUnionTypeNode(typeNode));
  }

  return transformType(getObjectProperties(item), typeNode => ts.factory.createTypeLiteralNode(typeNode));
}
