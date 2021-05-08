import fs from 'fs';
import path from 'path';

import { sortBy, groupBy } from 'lodash';
import type { Statement } from 'typescript';
import mkdirp from 'mkdirp';
import type { ImportOption } from '@vkbansal/oa2ts-core';

import type { Config, TypeDefinition } from './types';
import { createUniqImports, logInfo, printFile } from './helpers';

export async function writeToFile(
  config: Config,
  allStatements: Map<string, TypeDefinition>
): Promise<unknown> {
  const { verbose, output } = config;

  logInfo(verbose, `Writing output to a file`);

  const outFile = path.resolve(process.cwd(), output);
  const dir = path.dirname(outFile);
  const sortedStatements: Statement[] = [];
  const allGroupedImports: Record<string, ImportOption[]> = {};

  // make sure directory exists
  await mkdirp(dir);

  sortBy([...allStatements.entries()], ([key]) => key).forEach(
    ([_key, { statements, imports }]) => {
      sortedStatements.push(
        ...(Array.isArray(statements) ? statements : [statements])
      );

      const groupedImports = groupBy(imports || [], i => i.from);

      Object.entries(groupedImports).forEach(
        ([from, data]: [string, ImportOption[]]) => {
          if (!Array.isArray(allGroupedImports[from])) {
            allGroupedImports[from] = [];
          }

          allGroupedImports[from].push(...data);
        }
      );
    }
  );

  Object.entries(allGroupedImports).forEach(([_key, imports]) => {
    sortedStatements.unshift(...createUniqImports(imports));
  });

  logInfo(verbose, `Writing file: ${outFile}`);
  return fs.promises.writeFile(outFile, printFile(sortedStatements), 'utf8');
}
