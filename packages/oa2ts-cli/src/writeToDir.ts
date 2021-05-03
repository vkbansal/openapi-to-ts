import fs from 'fs';
import path from 'path';

import mkdirp from 'mkdirp';
import ts from 'typescript';
import {
  createNamedExport,
  createNamedImport,
  ObjectWithDependencies
} from '@vkbansal/oa2ts-utils';

import { printFile } from './helpers';
import type { Config } from './types';

export async function writeToDir(
  config: Config,
  allStatements: Map<string, ObjectWithDependencies>
): Promise<unknown> {
  // make sure directory exists
  await mkdirp(config.output);

  // output each definition to individual files
  const writeFiles = [...allStatements.entries()].map(([key, value]) => {
    const uniqueDependencies = new Set(value.dependencies);
    uniqueDependencies.delete(key);

    // all the import statements for all the dependencies
    const statements: ts.Statement[] = [...uniqueDependencies]
      .sort()
      .map(dep => createNamedImport(true, `./${dep}`, dep));

    // actual type definition
    statements.push(value.node);

    return fs.promises.writeFile(
      path.resolve(config.output, `${key}.ts`),
      printFile(statements),
      'utf8'
    );
  });

  // create index file with all the definitions
  const indexExports: ts.Statement[] = [...allStatements.keys()]
    .sort()
    .map(name => {
      const objWithDeps = allStatements.get(name);

      if (!objWithDeps) {
        throw new Error();
      }

      return createNamedExport(
        ts.isInterfaceDeclaration(objWithDeps.node) ||
          ts.isTypeLiteralNode(objWithDeps.node),
        `./${name}`,
        name
      );
    });

  // queue the index file write
  writeFiles.push(
    fs.promises.writeFile(
      path.resolve(config.output, `index.ts`),
      printFile(indexExports),
      'utf8'
    )
  );

  return Promise.all(writeFiles);
}
