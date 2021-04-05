import ts from 'typescript';
import type { ObjectWithDependencies } from '@vkbansal/oa2ts-utils';

export default function getFreeFormProperty(
  input: ObjectWithDependencies<ts.TypeNode> = {
    node: ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
    dependencies: []
  }
): ObjectWithDependencies<ts.TypeElement> {
  const { node: typeNode, dependencies } = input;

  return {
    node: ts.factory.createIndexSignature(
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
  };
}
