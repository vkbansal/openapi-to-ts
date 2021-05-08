import type { Statement } from 'typescript';

export interface ImportOption {
  default?: string;
  named?: string[];
  from: string;
  isTypeOnly: boolean;
}

export interface TypeDefinitionWithExports<T = Statement>
  extends TypeDefinition<T> {
  tsx?: boolean;
  imports?: ImportOption[];
}

export interface TypeDefinition<T = Statement> {
  statements: T;
  dependencies: string[];
}
