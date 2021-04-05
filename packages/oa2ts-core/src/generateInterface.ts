import ts from 'typescript';
import { pascal } from 'case';
import type { SchemaObject } from 'openapi3-ts';
import type { ObjectWithDependencies } from '@vkbansal/oa2ts-utils';
import { transformType } from '@vkbansal/oa2ts-utils';

import getObjectProperties from './getObjectProperties';
import addMetadataToNode from './addMetadataToNode';

export default function generateInterface(name: string, schema: SchemaObject): ObjectWithDependencies {
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
