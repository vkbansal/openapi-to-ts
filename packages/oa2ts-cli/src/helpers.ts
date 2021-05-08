import {
  Statement,
  NewLineKind,
  createPrinter,
  SyntaxKind,
  factory,
  NodeFlags
} from 'typescript';
import { isEmpty, forEach, isPlainObject, isString, groupBy } from 'lodash';
import swagger2openapi from 'swagger2openapi';
import type { AdvancedConfig, Config } from './types';
import type { OpenAPIObject } from 'openapi3-ts';
import chalk from 'chalk';
import { createImports, ImportOption } from '@vkbansal/oa2ts-core';

const printer = createPrinter({
  newLine: NewLineKind.LineFeed,
  removeComments: false,
  omitTrailingSemicolon: true
});

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

export function printFile(statements: Statement[]): string {
  return printer.printFile(
    factory.createSourceFile(
      statements,
      factory.createToken(SyntaxKind.EndOfFileToken),
      NodeFlags.None
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

export function logInfo(verbose: boolean, msg: string): void {
  if (verbose) {
    console.log(chalk.cyan(`[INFO]: ${msg}`));
  }
}

export function logWarning(msg: string): void {
  console.log(chalk.yellow(`[WARN]: ${msg}`));
}

export function padChunk(chunk: string, spacing = 6): string {
  return chunk
    .split('\n')
    .map(line => ' '.repeat(spacing) + line)
    .join('\n');
}

export function createUniqImports(imports?: ImportOption[]): Statement[] {
  const stmts: Statement[] = [];

  if (Array.isArray(imports) && imports.length > 0) {
    Object.entries(groupBy(imports, i => i.from)).forEach(
      ([from, importsArray]) => {
        const named = new Set(
          importsArray.filter(i => i.named).flatMap(i => i.named) as string[]
        );
        const isTypeOnly = importsArray.every(i => i.isTypeOnly);
        const defaultImport = new Set(
          importsArray.filter(i => i.default).map(i => i.default) as string[]
        );

        stmts.push(
          createImports(isTypeOnly, from, [...named], [...defaultImport][0])
        );
      }
    );
  }

  return stmts;
}
