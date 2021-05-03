import fs from 'fs';
import path from 'path';

import type * as ts from 'typescript';
import type { ObjectWithDependencies } from '@vkbansal/oa2ts-utils';
import mkdirp from 'mkdirp';

import type { Config } from './types';
import { printFile } from './helpers';

export async function writeToFile(
  config: Config,
  allStatements: Map<string, ObjectWithDependencies>
): Promise<unknown> {
  const outFile = path.resolve(process.cwd(), config.output);
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

  return fs.promises.writeFile(
    path.resolve(outFile),
    printFile(sortedStatements),
    'utf8'
  );
}
