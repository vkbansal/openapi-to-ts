import fs from 'fs';
import path from 'path';

import type { Statement } from 'typescript';
import mkdirp from 'mkdirp';

import type { Config, TypeDefinition } from './types';
import { logInfo, printFile } from './helpers';

export async function writeToFile(
  config: Config,
  allStatements: Map<string, TypeDefinition>
): Promise<unknown> {
  const { verbose, output } = config;

  logInfo(verbose, `Writing output to a file`);

  const outFile = path.resolve(process.cwd(), output);
  const dir = path.dirname(outFile);

  // make sure directory exists
  await mkdirp(dir);

  const sortedStatements: Statement[] = [...allStatements.keys()]
    .sort()
    .flatMap(key => {
      const objWithDeps = allStatements.get(key);

      if (!objWithDeps) {
        throw new Error();
      }

      return objWithDeps.statements;
    });

  logInfo(verbose, `Writing file: ${outFile}`);
  return fs.promises.writeFile(outFile, printFile(sortedStatements), 'utf8');
}
