import ts from 'typescript';
import { pascal } from 'case';

import type { SchemaObject } from 'openapi3-ts';

import type { TupleWithDependencies } from './helpers';
import { transformType } from './helpers';
import getObjectProperties from './getObjectProperties';
import addMetadataToNode from './addMetadataToNode';

export default function generateInterface(name: string, schema: SchemaObject): TupleWithDependencies<ts.Statement> {
  return transformType(getObjectProperties(schema), members => {
    const node = ts.factory.createInterfaceDeclaration(
      /* decorators */ undefined,
      /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      /* name */ pascal(name),
      /* typeParameters */ undefined,
      /** heritageClause */ undefined,
      /* members */ members
    );

    addMetadataToNode(node, schema);

    return node;
  });
}
