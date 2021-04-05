import ts from 'typescript';
import { pascal } from 'case';
import _ from 'lodash';
import type { ComponentsObject } from 'openapi3-ts';
import type { ObjectWithDependencies } from '@vkbansal/oa2ts-utils';
import { mapWithDeps, transformType } from '@vkbansal/oa2ts-utils';

import generateInterface from './generateInterface';
import getReqResDefintion from './getReqResDefintion';
import resolveValue from './resolveValue';

export function generateRequestBodyDefinition(
  schemas: ComponentsObject['requestBodies'] = {}
): Map<string, ObjectWithDependencies> {
  const data = Object.entries(schemas);
  const definitionsMap = new Map<string, ObjectWithDependencies<ts.Statement>>();

  if (data.length > 0) {
    _.sortBy(data, ([name]) => name).map(([name, requestBody]) => {
      const definitions = getReqResDefintion([['', requestBody]]);
      const finalName = `${pascal(name)}RequestBody`;

      if (definitions.length === 1) {
        definitionsMap.set(name, generateInterface(finalName, definitions[0]));
      } else {
        const node = transformType(mapWithDeps(definitions, resolveValue), typeNode => {
          const declaration = ts.factory.createTypeAliasDeclaration(
            /* decorators */ undefined,
            /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
            /* name */ finalName,
            /* typeParameters */ undefined,
            /* type */ ts.factory.createUnionTypeNode(typeNode)
          );

          // TODO: Add metadata to node

          return declaration;
        });

        definitionsMap.set(name, node);
      }
    });
  }

  return definitionsMap;
}
