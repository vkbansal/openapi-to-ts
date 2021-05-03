import _ from 'lodash';
import type { ReferenceObject } from 'openapi3-ts';
import type { ObjectWithDependencies } from './types';

export type { ObjectWithDependencies };
export { createNamedImport } from './createNamedImport';
export { createNamedExport } from './createNamedExport';

export function isReferenceObject(data: unknown): data is ReferenceObject {
  return typeof data === 'object' && data !== null && _.has(data, '$ref');
}

export function isEmptyObject(obj: unknown): boolean {
  return _.isPlainObject(obj) && _.isEmpty(obj);
}

export function transformType<T, U>(
  elem: ObjectWithDependencies<T>,
  func: (e: T) => U
): ObjectWithDependencies<U> {
  return {
    node: func(elem.node),
    dependencies: elem.dependencies
  };
}

/**
 * Map over an array while collecting
 */
export function mapWithDeps<T, U>(
  arr: Array<T>,
  func: (elem: T, i: number) => ObjectWithDependencies<U>
): ObjectWithDependencies<U[]> {
  return arr.reduce<ObjectWithDependencies<U[]>>(
    (acc: ObjectWithDependencies<U[]>, current: T, i) => {
      const transform = func(current, i);

      return {
        node: [...acc.node, transform.node],
        dependencies: [...acc.dependencies, ...transform.dependencies]
      };
    },
    { node: [], dependencies: [] } as ObjectWithDependencies<U[]>
  );
}
