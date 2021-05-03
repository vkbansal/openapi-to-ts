import type * as ts from 'typescript';

export interface ObjectWithDependencies<T = ts.Statement> {
  node: T;
  dependencies: string[];
}
