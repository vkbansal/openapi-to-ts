import ts from 'typescript';
import type { SchemaObject } from 'openapi3-ts';
import type { ObjectWithDependencies } from '@vkbansal/oa2ts-utils';
import { transformType } from '@vkbansal/oa2ts-utils';

import getScalar from './getScalar';

export default function getArray(
  item: SchemaObject
): ObjectWithDependencies<ts.TypeNode> {
  if (item.items) {
    return transformType(getScalar(item.items), typeNode => {
      if (ts.isUnionTypeNode(typeNode) || ts.isIntersectionTypeNode(typeNode)) {
        return ts.factory.createTypeReferenceNode('Array', [typeNode]);
      }

      return ts.factory.createArrayTypeNode(typeNode);
    });
  } else {
    throw new Error('All arrays must have an `items` key define');
  }
}
