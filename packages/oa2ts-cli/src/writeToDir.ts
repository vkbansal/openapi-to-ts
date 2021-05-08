import fs from 'fs';
import path from 'path';

import {
  Statement,
  isFunctionDeclaration,
  isTypeAliasDeclaration,
  isInterfaceDeclaration,
  isVariableStatement,
  SyntaxKind
} from 'typescript';
import mkdirp from 'mkdirp';
import { sortBy } from 'lodash';
import {
  createImports,
  ImportOption,
  createNamedExport
} from '@vkbansal/oa2ts-core';

import { createUniqImports, logInfo, printFile } from './helpers';
import type { Config, TypeDefinition } from './types';

function isExported(statement: Statement): boolean {
  return (
    Array.isArray(statement.modifiers) &&
    statement.modifiers.some(m => m.kind === SyntaxKind.ExportKeyword)
  );
}

function typeOfExport(statement: Statement): 'default' | 'named' {
  return Array.isArray(statement.modifiers) &&
    statement.modifiers.some(m => m.kind === SyntaxKind.DefaultKeyword)
    ? 'default'
    : 'named';
}

export interface GetExportNameReturn {
  isTypeOnly: boolean;
  typeOfExport: 'named' | 'default';
  name: string;
}

function getExportName(statement: Statement): GetExportNameReturn | null {
  if (isVariableStatement(statement)) {
    if (!isExported(statement)) {
      return null;
    }

    return {
      isTypeOnly: false,
      typeOfExport: typeOfExport(statement),
      name: ''
    };
  } else if (isFunctionDeclaration(statement)) {
    if (!isExported(statement)) {
      return null;
    }
    return {
      isTypeOnly: false,
      typeOfExport: typeOfExport(statement),
      name: statement.name?.escapedText as string
    };
  } else if (
    isTypeAliasDeclaration(statement) ||
    isInterfaceDeclaration(statement)
  ) {
    if (!isExported(statement)) {
      return null;
    }

    return {
      isTypeOnly: true,
      typeOfExport: typeOfExport(statement),
      name: statement.name.escapedText as string
    };
  } else {
    return null;
  }
}

export async function writeToDir(
  config: Config,
  allStatements: Map<string, TypeDefinition>
): Promise<unknown> {
  const { verbose, output } = config;
  logInfo(verbose, `Writing output to a directory`);
  const indexExports: Statement[] = [];
  // make sure directory exists
  await mkdirp(config.output);

  // output each definition to individual files
  const writeFiles = sortBy([...allStatements.entries()], ([key]) => key).map(
    ([key, value]) => {
      const { statements, dependencies, imports, tsx } = value;
      const filePath = path.resolve(output, `${key}${tsx ? '.tsx' : '.ts'}`);
      const finalStatements: Statement[] = [...createUniqImports(imports)];
      const uniqueDependencies = new Set(dependencies);
      const statementsArray = Array.isArray(statements)
        ? statements
        : [statements];
      const importConfigs: GetExportNameReturn[] = [];

      statementsArray.forEach(node => {
        const import1 = getExportName(node);

        if (import1) {
          importConfigs.push(import1);
        }
      });

      if (importConfigs.length > 0) {
        const indexImports = importConfigs.reduce<Required<ImportOption>>(
          (acc: Required<ImportOption>, { name, isTypeOnly, typeOfExport }) => {
            if (typeOfExport === 'named') {
              acc.named!.push(name);
            }

            acc.isTypeOnly = isTypeOnly && acc.isTypeOnly;

            return acc;
          },
          { from: `./${key}`, isTypeOnly: true, named: [], default: '' }
        );

        indexExports.push(
          createNamedExport(
            indexImports.isTypeOnly,
            indexImports.from,
            indexImports.named
          )
        );
      }

      // remove import of named module
      uniqueDependencies.delete(key);

      // all the import statements for all the dependencies
      if (uniqueDependencies.size > 0) {
        const importStatements = [...uniqueDependencies]
          .sort()
          .map(dep => createImports(true, `./${dep}`, [dep]));
        finalStatements.push(...importStatements);
      }

      // actual type definition
      finalStatements.push(...statementsArray);

      logInfo(verbose, `Writing file ${filePath}`);
      return fs.promises.writeFile(
        filePath,
        printFile(finalStatements),
        'utf8'
      );
    }
  );

  const indexFilePath = path.resolve(config.output, `index.ts`);

  // queue the index file write
  logInfo(verbose, `Writing file: ${indexFilePath}`);
  writeFiles.push(
    fs.promises.writeFile(indexFilePath, printFile(indexExports), 'utf8')
  );

  return Promise.all(writeFiles);
}
