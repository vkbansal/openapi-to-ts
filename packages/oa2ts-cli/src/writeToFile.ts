import fs from 'fs';
import path from 'path';

import type * as ts from 'typescript';
import type { ObjectWithDependencies } from '@vkbansal/oa2ts-utils';
import mkdirp from 'mkdirp';

import type { Config } from './types';
import { logInfo, printFile } from './helpers';

export async function writeToFile(
  config: Config,
  allStatements: Map<string, ObjectWithDependencies>
): Promise<unknown> {
  const { verbose, output } = config;

  logInfo(verbose, `Writing output to a file`);

  const outFile = path.resolve(process.cwd(), output);
  const dir = path.dirname(outFile);

  // make sure directory exists
  await mkdirp(dir);

  const sortedStatements: ts.Statement[] = [...allStatements.keys()]
    .sort()
    .map(key => {
      const objWithDeps = allStatements.get(key);

      if (!objWithDeps) {
        throw new Error();
      }

      return objWithDeps.node;
    });

  logInfo(verbose, `Writing file: ${outFile}`);
  return fs.promises.writeFile(outFile, printFile(sortedStatements), 'utf8');
}
