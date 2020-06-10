import { isEmpty, isPlainObject } from 'lodash';

export interface ObjectWithDependencies<T> {
  node: T;
  dependencies: string[];
}

export type TupleWithDependencies<T> = [T, string[]];

export function isEmptyObject(obj: any): boolean {
  return isPlainObject(obj) && isEmpty(obj);
}

export function transformType<T, U>(elem: TupleWithDependencies<T>, func: (elem: T) => U): TupleWithDependencies<U> {
  const typeNode = func(elem[0]);

  return [typeNode, elem[1]];
}

/**
 * Map over an array while collecting
 */
export function mapWithDeps<T, U>(
  arr: Array<T>,
  func: (elem: T, i: number) => TupleWithDependencies<U>
): TupleWithDependencies<U[]> {
  const mappedElems = [];
  const allDependencies = new Set<string>([]);

  for (let i = 0; i < arr.length; i++) {
    const [elem, dependencies] = func(arr[i], i);

    if (!Array.isArray(dependencies)) {
      throw new Error('Callback does not return a tuple with dependencies!');
    }

    mappedElems.push(elem);
    dependencies.forEach(d => allDependencies.add(d));
  }

  return [mappedElems, [...allDependencies]];
}
