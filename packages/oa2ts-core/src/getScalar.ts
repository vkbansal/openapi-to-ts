import ts from 'typescript';

import type { SchemaObject } from 'openapi3-ts';

import type { TupleWithDependencies } from './helpers';
import getArray from './getArray';
import getObject from './getObject';

export default function getScalar(item: SchemaObject): TupleWithDependencies<ts.TypeNode> {
  let type: ts.TypeNode;
  let deps: string[] = [];

  switch (item.type) {
    case 'int32':
    case 'int64':
    case 'number':
    case 'integer':
    case 'long':
    case 'float':
    case 'double':
      type = ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
      break;
    case 'boolean':
      type = ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
      break;
    case 'array':
      [type, deps] = getArray(item);
      break;
    case 'string':
    case 'byte':
    case 'binary':
    case 'date':
    case 'dateTime':
    case 'date-time':
    case 'password':
      type = item.enum
        ? ts.createUnionTypeNode(
            item.enum.map((name: string) => ts.createLiteralTypeNode(ts.createStringLiteral(name)))
          )
        : ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
      break;
    case 'void':
      type = ts.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword);
      break;
    case 'object':
    default:
      [type, deps] = getObject(item);
  }

  if (item.nullable) {
    type = ts.createUnionTypeNode([type, ts.createKeywordTypeNode(ts.SyntaxKind.NullKeyword)]);
  }

  return [type, deps];
}
