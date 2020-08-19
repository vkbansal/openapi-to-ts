import ts from 'typescript';
import has from 'lodash.has';
import type { SchemaObject } from 'openapi3-ts';

import type { TupleWithDependencies } from './helpers';
import { isEmptyObject, mapWithDeps, transformType } from './helpers';
import getFreeFormProperty from './getFreeFormProperty';
import resolveValue from './resolveValue';
import getScalar from './getScalar';
import addMetadataToNode from './addMetadataToNode';

export default function getObjectProperties(item: SchemaObject): TupleWithDependencies<ts.TypeElement[]> {
  if (!item.type && !has(item, 'properties') && !has(item, 'additionalProperties')) {
    return [[], []];
  }

  if (item.type === 'object' && !has(item, 'properties')) {
    if (
      !has(item, 'additionalProperties') ||
      isEmptyObject(item.additionalProperties) ||
      item.additionalProperties === true
    ) {
      return transformType(getFreeFormProperty(), type => [type]);
    }

    if (item.additionalProperties === false) {
      return [[], []];
    }

    if (item.additionalProperties) {
      return transformType(getFreeFormProperty(resolveValue(item.additionalProperties)), type => [type]);
    }
  }

  if (item.properties) {
    const [propetySignatures, dependencies] = mapWithDeps(Object.entries(item.properties), ([name, schema]) => {
      return transformType(getScalar(schema), typeNode => {
        const propertySignature = ts.createPropertySignature(
          /* modifiers */ undefined,
          /* name*/ name,
          /* questionToken */ item.required?.includes(name) ? undefined : ts.createToken(ts.SyntaxKind.QuestionToken),
          /* type */ typeNode,
          /* initializer */ undefined
        );

        addMetadataToNode(propertySignature, schema);

        return propertySignature;
      });
    });

    if (item.additionalProperties) {
      const [typeNode, moreDependencies] = getFreeFormProperty(
        item.additionalProperties === true ? undefined : resolveValue(item.additionalProperties)
      );
      propetySignatures.push(typeNode as any);
      dependencies.push(...moreDependencies);
    }

    return [propetySignatures, dependencies];
  }

  return [[], []];
}
