import ts from 'typescript';
import { isEmpty, forEach, isPlainObject, isString } from 'lodash';

import type { AdvancedConfig, Config } from './types';

export function validateSpecConfig(value: Config, key?: string): void {
  function getMessage(str: string): string {
    return key ? `specs.${key}.${str}` : str;
  }

  if (!isPlainObject(value)) {
    throw new Error(`spec must be an object`);
  }

  if (!isString(value.output)) {
    throw new Error(getMessage(`output must be a string`));
  }
}

export function validateAdvancedConfig(config: AdvancedConfig): void {
  if (isEmpty(config)) {
    throw new Error('Config cannot be empty');
  }

  if (isEmpty(config.specs)) {
    throw new Error('At least one spec is required');
  }

  forEach(config.specs, (value, key) => validateSpecConfig(value, key));
}

export function printStatement(statement: ts.Statement, printer: ts.Printer, sourceFile: ts.SourceFile): string {
  return printer.printNode(ts.EmitHint.Unspecified, statement, sourceFile);
}