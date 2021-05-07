import fs from 'fs';
import path from 'path';

import type { Statement } from 'typescript';
import mkdirp from 'mkdirp';
import { createNamedExport, createImports } from '@vkbansal/oa2ts-core';

import { logInfo, printFile } from './helpers';
import type { Config, TypeDefinition } from './types';

export async function writeToDir(
  config: Config,
  allStatements: Map<string, TypeDefinition>
): Promise<unknown> {
  const { verbose, output } = config;
  logInfo(verbose, `Writing output to a directory`);
  // make sure directory exists
  await mkdirp(config.output);

  // output each definition to individual files
  const writeFiles = [...allStatements.entries()].map(([key, value]) => {
    const { statements, dependencies, imports, exports, tsx } = value;
    const uniqueDependencies = new Set(dependencies);

    // remove import of named module
    uniqueDependencies.delete(key);

    // remove dependencies that being exported from same file
    exports.forEach(dep => uniqueDependencies.delete(dep.name));

    const filePath = path.resolve(output, `${key}${tsx ? '.tsx' : '.ts'}`);

    const finalStatements: Statement[] = [];

    // all the import statements for all the imports
    if (Array.isArray(imports) && imports.length > 0) {
      const importStatements = imports.map(i =>
        createImports(i.isTypeOnly, i.from, i.named, i.default)
      );

      finalStatements.push(...importStatements);
    }

    // all the import statements for all the dependencies
    if (uniqueDependencies.size > 0) {
      const importStatements = [...uniqueDependencies]
        .sort()
        .map(dep => createImports(true, `./${dep}`, [dep]));
      finalStatements.push(...importStatements);
    }

    // actual type definition
    finalStatements.push(
      ...(Array.isArray(statements) ? statements : [statements])
    );

    logInfo(verbose, `Writing file ${filePath}`);
    return fs.promises.writeFile(filePath, printFile(finalStatements), 'utf8');
  });

  // create index file with all the definitions
  const indexExports: Statement[] = [...allStatements.keys()]
    .sort()
    .map(name => {
      const objWithDeps = allStatements.get(name);

      if (!objWithDeps) {
        throw new Error();
      }

      return createNamedExport(
        objWithDeps.exports.every(e => e.isTypeOnly),
        `./${name}`,
        objWithDeps.exports.map(e => e.name)
      );
    });

  const indexFilePath = path.resolve(config.output, `index.ts`);

  // queue the index file write
  logInfo(verbose, `Writing file: ${indexFilePath}`);
  writeFiles.push(
    fs.promises.writeFile(indexFilePath, printFile(indexExports), 'utf8')
  );

  return Promise.all(writeFiles);
}
