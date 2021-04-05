import ts from 'typescript';
import { pascal } from 'case';
import type { SchemaObject } from 'openapi3-ts';
import type { ObjectWithDependencies } from '@vkbansal/oa2ts-utils';
import { transformType } from '@vkbansal/oa2ts-utils';

import addMetadataToNode from './addMetadataToNode';
import resolveValue from './resolveValue';

export default function generateTypeDeclaration(
  name: string,
  schema: SchemaObject
): ObjectWithDependencies<ts.Statement> {
  return transformType(resolveValue(schema), typeNode => {
    const declaration = ts.factory.createTypeAliasDeclaration(
      /* decorators */ undefined,
      /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      /* name */ pascal(name),
      /* typeParameters */ undefined,
      /* type */ typeNode
    );

    addMetadataToNode(declaration, schema);

    return declaration;
  });
}
