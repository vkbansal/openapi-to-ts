import ts from 'typescript';
import type {
  SchemaObject,
  ReferenceObject,
  RequestBodyObject
} from 'openapi3-ts';
import { isReferenceObject } from '@vkbansal/oa2ts-utils';

import formatDescription from './formatDescription';

export default function addMetadataToNode<T extends ts.Node>(
  node: T,
  schema: SchemaObject | ReferenceObject | RequestBodyObject
): void {
  const comments: string[] = [];

  if (!isReferenceObject(schema)) {
    if (schema.description) comments.push(schema.description);

    if (schema.format) comments.push(`@format ${schema.format}`);

    if (schema.default) comments.push(`@default ${schema.default}`);

    if (schema.example) comments.push(`@example\n${schema.example}`);

    if (schema.deprecated) comments.push('@deprecated');
  }

  if (comments.length > 0) {
    ts.addSyntheticLeadingComment(
      node,
      ts.SyntaxKind.MultiLineCommentTrivia,
      formatDescription(comments.join('\n')),
      true
    );
  }
}
