import ts from 'typescript';
import type { SchemaObject } from 'openapi3-ts';
import type { ObjectWithDependencies } from '@vkbansal/oa2ts-utils';

import getArray from './getArray';
import getObject from './getObject';

export default function getScalar(item: SchemaObject): ObjectWithDependencies<ts.TypeNode> {
  let type: ts.TypeNode;
  let deps: string[] = [];

  switch (item.type) {
    case 'number':
    case 'integer':
      type = ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
      break;
    case 'boolean':
      type = ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
      break;
    case 'array': {
      const arr = getArray(item);
      type = arr.node;
      deps = arr.dependencies;
      break;
    }
    case 'string':
      type = item.enum
        ? ts.factory.createUnionTypeNode(
            item.enum.map((name: string) => ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(name)))
          )
        : ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
      break;
    case 'object':
    default: {
      const obj = getObject(item);
      type = obj.node;
      deps = obj.dependencies;
    }
  }

  if (item.nullable) {
    type = ts.factory.createUnionTypeNode([type, ts.factory.createLiteralTypeNode(ts.factory.createNull())]);
  }

  return {
    node: type,
    dependencies: deps
  };
}
