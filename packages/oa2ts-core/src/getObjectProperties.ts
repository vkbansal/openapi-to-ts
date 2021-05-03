import ts from 'typescript';
import _ from 'lodash';
import type { SchemaObject } from 'openapi3-ts';
import type { ObjectWithDependencies } from '@vkbansal/oa2ts-utils';
import {
  isEmptyObject,
  mapWithDeps,
  transformType
} from '@vkbansal/oa2ts-utils';

import getFreeFormProperty from './getFreeFormProperty';
import resolveValue from './resolveValue';
import getScalar from './getScalar';
import addMetadataToNode from './addMetadataToNode';

export type ObjPropsWithDependencies = ObjectWithDependencies<ts.TypeElement[]>;

export default function getObjectProperties(
  item: SchemaObject
): ObjPropsWithDependencies {
  if (
    !item.type &&
    !_.has(item, 'properties') &&
    !_.has(item, 'additionalProperties')
  ) {
    return { node: [], dependencies: [] };
  }

  if (item.type === 'object' && !_.has(item, 'properties')) {
    if (
      !_.has(item, 'additionalProperties') ||
      isEmptyObject(item.additionalProperties) ||
      item.additionalProperties === true
    ) {
      return transformType(getFreeFormProperty(), type => [type]);
    }

    if (item.additionalProperties === false) {
      return { node: [], dependencies: [] };
    }

    if (item.additionalProperties) {
      return transformType(
        getFreeFormProperty(resolveValue(item.additionalProperties)),
        type => [type]
      );
    }
  }

  if (item.properties) {
    const { node: propertySignatures, dependencies } = mapWithDeps(
      _.sortBy(Object.entries(item.properties), ([key]) => key),
      ([name, schema]) =>
        transformType(getScalar(schema), typeNode => {
          const propertySignature = ts.factory.createPropertySignature(
            /* modifiers */ undefined,
            /* name*/ name,
            /* questionToken */ item.required?.includes(name)
              ? undefined
              : ts.factory.createToken(ts.SyntaxKind.QuestionToken),
            /* type */ typeNode
          );

          addMetadataToNode(propertySignature, schema);

          return propertySignature;
        })
    );

    if (item.additionalProperties) {
      const {
        node: typeNode,
        dependencies: moreDependencies
      } = getFreeFormProperty(
        item.additionalProperties === true
          ? undefined
          : resolveValue(item.additionalProperties)
      );

      propertySignatures.push(typeNode as ts.PropertySignature);
      dependencies.push(...moreDependencies);
    }

    return {
      node: propertySignatures,
      dependencies
    };
  }

  return {
    node: [],
    dependencies: []
  };
}
