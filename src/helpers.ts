import { camelCase, upperFirst, isEmpty, isPlainObject } from 'lodash';

export interface ObjectWithDependencies<T> {
  node: T;
  dependencies: string[];
}

export type TupleWithDependencies<T> = [T, string[]];

export function pascalCase(str: string): string {
  return upperFirst(camelCase(str));
}

export function isEmptyObject(obj: any): boolean {
  return isPlainObject(obj) && isEmpty(obj);
}
