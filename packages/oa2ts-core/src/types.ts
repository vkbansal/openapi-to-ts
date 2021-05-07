import type { Statement } from 'typescript';

export interface TypeDefinitionWithExports<T = Statement>
  extends TypeDefinition<T> {
  exports: Array<{ name: string; isTypeOnly: boolean }>;
  tsx?: boolean;
  imports?: Array<{
    default?: string;
    named?: string[];
    from: string;
    isTypeOnly: boolean;
  }>;
}

export interface TypeDefinition<T = Statement> {
  statements: T;
  dependencies: string[];
}
