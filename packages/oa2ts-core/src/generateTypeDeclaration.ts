import ts from 'typescript';
import { pascal } from 'case';
import type { SchemaObject } from 'openapi3-ts';

import type { TupleWithDependencies } from './helpers';
import { transformType } from './helpers';
import addMetadataToNode from './addMetadataToNode';
import resolveValue from './resolveValue';

export default function generateTypeDeclaration(
  name: string,
  schema: SchemaObject
): TupleWithDependencies<ts.Statement> {
  return transformType(resolveValue(schema), typeNode => {
    const declaration = ts.createTypeAliasDeclaration(
      /* decorators */ undefined,
      /* modifiers */ [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
      /* name */ pascal(name),
      /* typeParameters */ undefined,
      /* type */ typeNode
    );

    addMetadataToNode(declaration, schema);

    return declaration;
  });
}
