import ts from 'typescript';

import type { TupleWithDependencies } from './helpers';

export default function getFreeFormProperty(
  [typeNode, dependencies]: [ts.TypeNode, string[]] = [ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword), []]
): TupleWithDependencies<ts.TypeElement> {
  return [
    ts.createIndexSignature(
      /* decorators */ undefined,
      /* modifiers */ undefined,
      /* parameters*/ [
        ts.createParameter(
          /* decorators */ undefined,
          /* modifiers */ undefined,
          /* spread token */ undefined,
          /* name */ 'key',
          /* questionToken */ undefined,
          /* type */ ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          /* initializer */ undefined
        )
      ],
      /* type */ typeNode
    ),
    dependencies
  ];
}
