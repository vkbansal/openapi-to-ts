import ts from 'typescript';
import { pascal } from 'case';

import type { ComponentsObject } from 'openapi3-ts';

import type { TupleWithDependencies } from './helpers';
import { mapWithDeps, transformType } from './helpers';
import generateInterface from './generateInterface';
import getReqResDefintion from './getReqResDefintion';
import resolveValue from './resolveValue';

export default function generateRequestBodyDefinition(
  schemas: ComponentsObject['requestBodies'] = {}
): Array<TupleWithDependencies<ts.Statement>> {
  const data = Object.entries(schemas);

  if (data.length === 0) return [];

  return data.map(([name, requestBody]) => {
    const definitions = getReqResDefintion([['', requestBody]]);
    const finalName = `${pascal(name)}RequestBody`;

    if (definitions.length === 1) {
      return generateInterface(finalName, definitions[0]);
    } else {
      return transformType(mapWithDeps(definitions, resolveValue), typeNode => {
        const declaration = ts.createTypeAliasDeclaration(
          /* decorators */ undefined,
          /* modifiers */ [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
          /* name */ finalName,
          /* typeParameters */ undefined,
          /* type */ ts.createUnionTypeNode(typeNode)
        );

        // TODO: Add metadata to node

        return declaration;
      });
    }
  });
}
