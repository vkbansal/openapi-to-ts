import ts from 'typescript';

import type { TupleWithDependencies } from './helpers';

export default function getFreeFormProperty(
  [typeNode, dependencies]: [ts.TypeNode, string[]] = [ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword), []]
): TupleWithDependencies<ts.TypeElement> {
  return [
    ts.factory.createIndexSignature(
      /* decorators */ undefined,
      /* modifiers */ undefined,
      /* parameters*/ [
        ts.factory.createParameterDeclaration(
          /* decorators */ undefined,
          /* modifiers */ undefined,
          /* spread token */ undefined,
          /* name */ 'key',
          /* questionToken */ undefined,
          /* type */ ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          /* initializer */ undefined
        )
      ],
      /* type */ typeNode
    ),
    dependencies
  ];
}
