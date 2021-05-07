import { factory, Statement } from 'typescript';
import type { ComponentsObject } from 'openapi3-ts';
import { sortBy } from 'lodash';
import {
  getNameForRequestBody,
  getNameForType,
  isReferenceObject,
  reduceToTypeDefinition,
  transformStatements,
  getNameForErrorResponse,
  getNameForResponse,
  getNameForPathParams,
  getNameForParameter,
  getNameForQueryParams,
  isEmptyObject,
  addMetadataToNode,
  formatDescription
} from './utils';
import type { TypeDefinition, TypeDefinitionWithExports } from './types';
import {
  createReferenceNode,
  createInterface,
  createTypeDeclaration,
  getOKResponseSchema,
  getRequestResponseSchema,
  resolveValue,
  getErrorResponseSchema,
  createArray,
  createFreeFormProperty,
  createObject,
  createObjectProperties,
  createScalarNode,
  createResponseDefinitionCreator,
  createUnionType
} from './creatorFns';

export {
  /* creatorFns */
  createReferenceNode,
  createInterface,
  createTypeDeclaration,
  getOKResponseSchema,
  getRequestResponseSchema,
  resolveValue,
  getErrorResponseSchema,
  createArray,
  createFreeFormProperty,
  createObject,
  createObjectProperties,
  createScalarNode,
  /* types */
  TypeDefinition,
  TypeDefinitionWithExports,
  /* utils */
  getNameForRequestBody,
  getNameForType,
  isReferenceObject,
  reduceToTypeDefinition,
  transformStatements,
  getNameForErrorResponse,
  getNameForResponse,
  getNameForPathParams,
  getNameForParameter,
  getNameForQueryParams,
  isEmptyObject,
  addMetadataToNode,
  formatDescription,
  createUnionType,
  createResponseDefinitionCreator
};

export function createNamedExport(
  typeOnly: boolean,
  importFrom: string,
  names: string[]
): Statement {
  return factory.createExportDeclaration(
    /* decorators */ undefined,
    /* modifiers */ undefined,
    /* typeOnly */ typeOnly,
    /* exportClause */ factory.createNamedExports(
      names.map(name =>
        factory.createExportSpecifier(undefined, factory.createIdentifier(name))
      )
    ),
    /* moduleSpecifier */ factory.createStringLiteral(importFrom)
  );
}

export function createImports(
  typeOnly: boolean,
  importFrom: string,
  named?: string[],
  defaultImport?: string
): Statement {
  return factory.createImportDeclaration(
    /* decorators */ undefined,
    /* modifiers */ undefined,
    /* importClause */ factory.createImportClause(
      /* typeOnly */ typeOnly,
      /* name */ defaultImport
        ? factory.createIdentifier(defaultImport)
        : undefined,
      /* nameBindings */ Array.isArray(named)
        ? factory.createNamedImports(
            /* elements */ named.map(name =>
              factory.createImportSpecifier(
                undefined,
                factory.createIdentifier(name)
              )
            )
          )
        : undefined
    ),
    /* moduleSpecifier */ factory.createStringLiteral(importFrom)
  );
}

export const createOKResponseDefinition = createResponseDefinitionCreator(
  getOKResponseSchema
);
export const createErrorResponseDefinition = createResponseDefinitionCreator(
  getErrorResponseSchema
);

export function createSchemaDefinitions(
  schemas: ComponentsObject['schemas'] = {}
): Map<string, TypeDefinitionWithExports> {
  const data = Object.entries(schemas);
  const definitionsMap = new Map<string, TypeDefinitionWithExports>();

  if (data.length > 0) {
    sortBy(data, ([name]) => name).forEach(([name, schema]) => {
      const finalName = getNameForType(name);

      if (
        !isReferenceObject(schema) &&
        (!schema.type || schema.type === 'object') &&
        !schema.allOf &&
        !schema.oneOf &&
        !schema.nullable
      ) {
        definitionsMap.set(finalName, {
          ...createInterface(finalName, schema),
          exports: [{ name: finalName, isTypeOnly: true }]
        });
      } else {
        definitionsMap.set(finalName, {
          ...createTypeDeclaration(finalName, schema),
          exports: [{ name: finalName, isTypeOnly: true }]
        });
      }
    });
  }

  return definitionsMap;
}

export function createRequestBodyDefinitions(
  schemas: ComponentsObject['requestBodies'] = {}
): Map<string, TypeDefinitionWithExports> {
  const data = Object.entries(schemas);
  const definitionsMap = new Map<string, TypeDefinitionWithExports>();

  if (data.length > 0) {
    sortBy(data, ([name]) => name).map(([name, requestBody]) => {
      const definitions = getRequestResponseSchema([['', requestBody]]);
      const finalName = getNameForRequestBody(name);

      if (definitions.length === 1) {
        definitionsMap.set(finalName, {
          ...createInterface(finalName, definitions[0]),
          exports: [{ name: finalName, isTypeOnly: true }]
        });
      } else {
        const node = createUnionType(finalName, definitions);

        definitionsMap.set(finalName, {
          ...node,
          exports: [{ name: finalName, isTypeOnly: true }]
        });
      }
    });
  }

  return definitionsMap;
}
