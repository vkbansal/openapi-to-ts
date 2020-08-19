import ts from 'typescript';
import type { SchemaObject } from 'openapi3-ts';

import type { TupleWithDependencies } from './helpers';
import { isReferenceObject } from './helpers';
import getRef from './getRef';
import getScalar from './getScalar';

export default function resolveValue(schema: SchemaObject): TupleWithDependencies<ts.TypeNode> {
  return isReferenceObject(schema) ? getRef(schema.$ref) : getScalar(schema);
}
