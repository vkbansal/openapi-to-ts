import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pascalCase } from 'pascal-case';
import type { ReferenceObject } from 'openapi3-ts';
import _ from 'lodash';
import { addSyntheticLeadingComment, Node, SyntaxKind } from 'typescript';
import type { RequestBodyObject, SchemaObject } from 'openapi3-ts';

export function getNameForType(name: string): string {
  return pascalCase(name);
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
  return typeof data === 'object' && data !== null && _.has(data, '$ref');
}

export function isEmptyObject(obj: unknown): boolean {
  return _.isPlainObject(obj) && _.isEmpty(obj);
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

export async function renderTemplateFromFile(
  file: string,
  data?: object
): Promise<string> {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const templateStr = await fs.readFile(
    path.resolve(__dirname, 'templates', file),
    'utf8'
  );

  return _.template(templateStr, { imports: { _ } })(data);
}
