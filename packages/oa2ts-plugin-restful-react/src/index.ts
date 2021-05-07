import type { OpenAPIObject } from 'openapi3-ts';
import type { TypeDefinitionWithExports } from '@vkbansal/oa2ts-core';
import type {
  OperationObject,
  PathItemObject,
  ParameterLocation,
  ParameterObject,
  SchemaObject
} from 'openapi3-ts';
import { get, groupBy } from 'lodash';
import { Statement, factory, SyntaxKind } from 'typescript';
import {
  getNameForPathParams,
  isReferenceObject,
  createInterface,
  getNameForType,
  getNameForQueryParams,
  createOKResponseDefinition,
  getNameForResponse,
  getNameForErrorResponse,
  createErrorResponseDefinition
} from '@vkbansal/oa2ts-core';

import type { PluginConfig } from './types';
import { createHook } from './createHook';

const ALLOWED_METHODS = ['get', 'post', 'patch', 'put', 'delete'];

export function getParamsInPath(path: string): string[] {
  let n;
  const output = [];
  const templatePathRegex = /{(\w+?)}/g;

  while ((n = templatePathRegex.exec(path)) !== null) {
    output.push(n[1]);
  }

  return output;
}

export function plugin(
  spec: OpenAPIObject,
  config: PluginConfig
): Map<string, TypeDefinitionWithExports<Statement | Statement[]>> {
  const typeDefData = new Map<
    string,
    TypeDefinitionWithExports<Statement | Statement[]>
  >();
  const operationIds = new Set<string>();

  // Loop over all the paths
  Object.entries(spec.paths || {}).forEach(
    ([route, verbs]: [string, PathItemObject]) => {
      // loop over all the verbs
      Object.entries(verbs).forEach(
        ([verb, operation]: [string, OperationObject]) => {
          // check for allowed methods
          if (!ALLOWED_METHODS.includes(verb)) {
            return;
          }

          // check for operationId
          if (!operation.operationId) {
            throw new Error(
              `Every path must have a operationId - No operationId set for ${verb} ${route}`
            );
          }

          // check if operationId is already used
          if (operationIds.has(operation.operationId)) {
            throw new Error(
              `"${operation.operationId}" is duplicated in your schema definition!`
            );
          }

          // mark operationId as used
          operationIds.add(operation.operationId);

          const typeDef: Required<TypeDefinitionWithExports<Statement[]>> = {
            statements: [],
            exports: [],
            dependencies: [],
            imports: [],
            tsx: false
          };
          const componentName = getNameForType(operation.operationId);

          const paramsInPath = getParamsInPath(route);
          const resolvedParameters = [
            ...(verbs.parameters || []),
            ...(operation.parameters || [])
          ]
            .map<ParameterObject>(p =>
              isReferenceObject(p)
                ? get(
                    spec.components,
                    p.$ref.replace('#/components/parameters/', '')
                  )
                : p
            )
            .filter(p => p);
          const {
            query: queryParams = [],
            path: pathParams = []
            // header: headerParams = []
          } = groupBy(resolvedParameters, 'in') as Record<
            ParameterLocation,
            ParameterObject[]
          >;

          const responseName = getNameForResponse(operation.operationId);
          const [responseType, responseDef] = createOKResponseDefinition(
            operation.responses,
            responseName
          );

          const errorName = getNameForErrorResponse(operation.operationId);
          const [errorType, errorDef] = createErrorResponseDefinition(
            operation.responses,
            errorName
          );

          typeDef.dependencies.push(...responseType.dependencies);
          typeDef.dependencies.push(...errorType.dependencies);

          if (responseDef) {
            typeDef.statements.push(responseDef.statements);
            typeDef.dependencies.push(...responseDef.dependencies);
            typeDef.exports.push({ name: responseName, isTypeOnly: true });
          }

          if (errorDef) {
            typeDef.statements.push(errorDef.statements);
            typeDef.dependencies.push(...errorDef.dependencies);
            typeDef.exports.push({ name: errorName, isTypeOnly: true });
          }

          const hasPathParams = paramsInPath.length > 0;
          const pathParamsName = getNameForPathParams(operation.operationId);

          if (hasPathParams) {
            const pathParamsSchema: SchemaObject = {
              type: 'object',
              required: paramsInPath,
              properties: paramsInPath.reduce((props, n) => {
                const param = pathParams.find(p => p.name === n);

                if (!param) {
                  throw new Error(
                    `The path param ${n} cannot be found in parameters of "${operation.operationId}" operation`
                  );
                }

                return {
                  ...props,
                  [n]: param.schema
                };
              }, {})
            };

            const pathParamsInterface = createInterface(
              pathParamsName,
              pathParamsSchema
            );

            typeDef.statements.push(pathParamsInterface.statements);
            typeDef.dependencies.push(...pathParamsInterface.dependencies);
            typeDef.exports.push({ name: pathParamsName, isTypeOnly: true });
          }

          const hasQueryParams = queryParams.length > 0;
          const queryParamsName = getNameForQueryParams(operation.operationId);

          if (hasQueryParams) {
            const queryParamsSchema: SchemaObject = {
              type: 'object',
              required: queryParams.filter(p => p.required).map(p => p.name),
              properties: queryParams.reduce((params, param) => {
                return {
                  ...params,
                  [param.name]: param.schema
                };
              }, {})
            };

            const queryParamsInterface = createInterface(
              queryParamsName,
              queryParamsSchema
            );

            typeDef.statements.push(queryParamsInterface.statements);
            typeDef.dependencies.push(...queryParamsInterface.dependencies);
            typeDef.exports.push({ name: queryParamsName, isTypeOnly: true });
          }

          if (!config.noHooks) {
            createHook({
              componentName,
              pathParamsName,
              hasQueryParams,
              paramsInPath,
              queryParamsName,
              responseType: responseType.statements,
              errorType: errorType.statements,
              route,
              typeDef,
              verb
            });
          }

          if (!config.noComponents) {
            typeDef.tsx = true;
            const propsName = `${componentName}Props`;

            const propsSchema: SchemaObject = { type: 'object' };

            const propsDef = createInterface(propsName, propsSchema);

            typeDef.statements.push(propsDef.statements);
            typeDef.dependencies.push(...propsDef.dependencies);
            typeDef.exports.push({ name: propsName, isTypeOnly: true });

            const componentDef = factory.createFunctionDeclaration(
              /* decorators */ undefined,
              /* modifiers */ [
                factory.createModifier(SyntaxKind.ExportKeyword)
              ],
              /* asteriskToken */ undefined,
              /* name */ componentName,
              /* typeParameters */ [],
              /* parameters */ [],
              /* returnType */ undefined,
              /* body */ factory.createBlock([])
            );

            typeDef.statements.push(componentDef);
            typeDef.exports.push({
              name: componentName,
              isTypeOnly: false
            });
          }

          typeDefData.set(componentName, typeDef);
        }
      );
    }
  );

  return typeDefData;
}
