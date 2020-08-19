import ts from 'typescript';
import type { SchemaObject } from 'openapi3-ts';

import type { TupleWithDependencies } from './helpers';
import { mapWithDeps, transformType, isReferenceObject } from './helpers';
import getRef from './getRef';
import getObjectProperties from './getObjectProperties';
import resolveValue from './resolveValue';

export default function getObject(item: SchemaObject): TupleWithDependencies<ts.TypeNode> {
  if (isReferenceObject(item)) {
    return getRef(item.$ref);
  }

  if (item.allOf) {
    const mappedValues = mapWithDeps(item.allOf, resolveValue);

    return transformType(mappedValues, typeNode => ts.createIntersectionTypeNode(typeNode));
  }

  if (item.oneOf) {
    const mappedValues = mapWithDeps(item.oneOf, resolveValue);

    return transformType(mappedValues, typeNode => ts.createUnionTypeNode(typeNode));
  }

  return transformType(getObjectProperties(item), typeNode => ts.createTypeLiteralNode(typeNode));
}
