import ts from 'typescript';
import { isEmpty, forEach, isPlainObject, isString } from 'lodash';
import swagger2openapi from 'swagger2openapi';

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
  removeComments: false,
  omitTrailingSemicolon: true
});

import type { AdvancedConfig, Config } from './types';
import type { OpenAPIObject } from 'openapi3-ts';

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

export function printFile(statements: ts.Statement[]): string {
  return printer.printFile(
    ts.factory.createSourceFile(
      statements,
      ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
      ts.NodeFlags.None
    )
  );
}

export function convertToOpenAPI(schema: unknown): Promise<OpenAPIObject> {
  return new Promise((resolve, reject) => {
    swagger2openapi.convertObj(schema, {}, (err, convertedObj) => {
      if (err) {
        reject(err);
      } else {
        resolve(convertedObj.openapi);
      }
    });
  });
}
