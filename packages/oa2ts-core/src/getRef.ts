import ts from 'typescript';
import { pascal } from 'case';

import type { TupleWithDependencies } from './helpers';

export default function getRef($ref: string): TupleWithDependencies<ts.TypeNode> {
  let type = '';

  if ($ref.startsWith('#/components/schemas')) {
    type = pascal($ref.replace('#/components/schemas/', ''));
  } else if ($ref.startsWith('#/components/responses')) {
    type = pascal($ref.replace('#/components/responses/', '')) + 'Response';
  } else if ($ref.startsWith('#/components/parameters')) {
    type = pascal($ref.replace('#/components/parameters/', '')) + 'Parameter';
  } else if ($ref.startsWith('#/components/requestBodies')) {
    type = pascal($ref.replace('#/components/requestBodies/', '')) + 'RequestBody';
  } else {
    throw new Error('This library only resolve $ref that are include into `#/components/*` for now');
  }

  return [ts.factory.createTypeReferenceNode(type, []), [type]];
}
