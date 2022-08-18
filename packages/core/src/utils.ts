import { pascal } from 'case';
import type { ReferenceObject } from 'openapi3-ts';
import { has, isEmpty, isPlainObject } from 'lodash';
import type { Statement } from 'typescript';
import { addSyntheticLeadingComment, Node, SyntaxKind } from 'typescript';
import type { RequestBodyObject, SchemaObject } from 'openapi3-ts';

import type { TypeDefinition } from './types';

export function getNameForType(name: string): string {
  return pascal(name);
}

export function getNameForResponse(name: string): string {
  return getNameForType(name) + 'Response';
}

export function getNameForErrorResponse(name: string): string {
  return getNameForType(name) + 'Error';
}

export function getNameForParameter(name: string): string {
  return getNameForType(name) + 'Parameter';
}

export function getNameForRequestBody(name: string): string {
  return getNameForType(name) + 'RequestBody';
}

export function getNameForPathParams(name: string): string {
  return getNameForType(name) + 'PathParams';
}

export function getNameForQueryParams(name: string): string {
  return getNameForType(name) + 'QueryParams';
}

export function isReferenceObject(data: unknown): data is ReferenceObject {
  return typeof data === 'object' && data !== null && has(data, '$ref');
}

export function isEmptyObject(obj: unknown): boolean {
  return isPlainObject(obj) && isEmpty(obj);
}

export function reduceToTypeDefinition<T, U = Statement>(
  data: T[],
  reducer: (elem: T, i: number) => TypeDefinition<U[]>
): TypeDefinition<U[]> {
  const initialValues: TypeDefinition<U[]> = {
    statements: [],
    dependencies: []
  };

  return data.reduce(
    (acc: TypeDefinition<U[]>, curr: T, i: number): TypeDefinition<U[]> => {
      const transform = reducer(curr, i);

      return {
        statements: [...acc.statements, ...transform.statements],
        dependencies: [...acc.dependencies, ...transform.dependencies]
      };
    },
    initialValues
  );
}

export function transformStatements<T = Statement, U = Statement>(
  elem: TypeDefinition<T>,
  func: (e: T) => U
): TypeDefinition<U> {
  return {
    statements: func(elem.statements),
    dependencies: elem.dependencies
  };
}

export function formatDescription(description: string, tabSize = 0): string {
  return `*
${description
  .split('\n')
  .map(str => `${' '.repeat(tabSize)} * ${str}`)
  .join('\n')}

  `;
}

export function addMetadataToNode<T extends Node>(
  node: T,
  schema: SchemaObject | ReferenceObject | RequestBodyObject
): void {
  const comments: string[] = [];

  if (!isReferenceObject(schema)) {
    if (schema.description) comments.push(schema.description);

    if ((schema as SchemaObject).format)
      comments.push(`@format ${(schema as SchemaObject).format}`);

    if ((schema as SchemaObject).default)
      comments.push(`@default ${(schema as SchemaObject).default}`);

    if ((schema as SchemaObject).example)
      comments.push(`@example\n${(schema as SchemaObject).example}`);

    if ((schema as SchemaObject).deprecated) comments.push('@deprecated');
  }

  if (comments.length > 0) {
    addSyntheticLeadingComment(
      node,
      SyntaxKind.MultiLineCommentTrivia,
      formatDescription(comments.join('\n')),
      true
    );
  }
}
