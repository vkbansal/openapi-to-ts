import type ts from 'typescript';
import _ from 'lodash';
import type { ReferenceObject } from 'openapi3-ts';

export interface ObjectWithDependencies<T = ts.Statement> {
  node: T;
  dependencies: string[];
}

export function isReferenceObject(data: unknown): data is ReferenceObject {
  return typeof data === 'object' && data !== null && _.has(data, '$ref');
}

export function isEmptyObject(obj: unknown): boolean {
  return _.isPlainObject(obj) && _.isEmpty(obj);
}

export function transformType<T, U>(elem: ObjectWithDependencies<T>, func: (e: T) => U): ObjectWithDependencies<U> {
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
      const trasnsform = func(current, i);

      return {
        node: [...acc.node, trasnsform.node],
        dependencies: [...acc.dependencies, ...trasnsform.dependencies]
      };
    },
    { node: [], dependencies: [] } as ObjectWithDependencies<U[]>
  );
}
