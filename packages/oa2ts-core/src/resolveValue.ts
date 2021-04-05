import type ts from 'typescript';
import type { SchemaObject } from 'openapi3-ts';
import type { ObjectWithDependencies } from '@vkbansal/oa2ts-utils';
import { isReferenceObject } from '@vkbansal/oa2ts-utils';

import getRef from './getRef';
import getScalar from './getScalar';

export default function resolveValue(schema: SchemaObject): ObjectWithDependencies<ts.TypeNode> {
  return isReferenceObject(schema) ? getRef(schema.$ref) : getScalar(schema);
}
