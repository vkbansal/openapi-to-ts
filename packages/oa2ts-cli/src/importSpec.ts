import fs from 'fs';
import path from 'path';

// import ts from 'typescript';
import _ from 'lodash';
import yaml from 'js-yaml';
import type { OpenAPIObject } from 'openapi3-ts';
import { generateSchemaDefintion } from '@vkbansal/oa2ts-core';
// import { TupleWithDependencies } from '@vkbansal/oa2ts-core';

import type { Config, AdvancedConfig } from './types';
// import { printStatement } from './helpers';

// const printer = ts.createPrinter({
//   newLine: ts.NewLineKind.LineFeed,
//   removeComments: false,
//   omitTrailingSemicolon: true
// });

export interface ImportOpenAPIArgs {
  content: string;
  format: 'json' | 'yaml';
}

async function importOpenAPI({ content, format }: ImportOpenAPIArgs): Promise<void> {
  const spec: OpenAPIObject = format === 'yaml' ? yaml.load(content) : JSON.parse(content);

  const schemaDefs = generateSchemaDefintion(spec.components?.schemas);
  // const requestDefs = generateRequestBodyDefinition(spec.components?.requestBodies);

  // const allStatements: Array<TupleWithDependencies<ts.Statement>> = _.sortBy([...schemaDefs, ...requestDefs], ([node]) =>)

  // const input = ts.createSourceFile(
  //   'dummy.ts',
  //   '',
  //   ts.ScriptTarget.Latest,
  //   /* setParentNodes */ false,
  //   ts.ScriptKind.TS
  // );

  // const final = schemaDefs.reduce((str, [node]) => {
  //   return str + '\n' + printStatement(node, printer, input);
  // }, '');

  console.log(schemaDefs);
}

async function generate(config: Config): Promise<void> {
  if (config.file) {
    const content = await fs.promises.readFile(path.resolve(process.cwd(), config.file), 'utf8');
    const ext = path.extname(config.file);
    const format = /\.ya?ml$/i.test(ext) ? 'yaml' : 'json';

    await importOpenAPI({ content, format });
  } else if (config.url) {
    // read from URL
  }
}

export async function importSpec(argv: Config, config: AdvancedConfig | null): Promise<void> {
  if (config) {
    const { specs, ...restConfig } = config;

    const tasks = _.map(config.specs, conf => {
      const resolvedConf = _.defaults(conf, restConfig);

      return generate(resolvedConf);
    });

    await Promise.all(tasks);
  } else {
    await generate(argv);
  }
}

// import type ts from 'typescript';
// import type { OpenAPIObject } from 'openapi3-ts';
// import type { TupleWithDependencies } from '@vkbansal/oa2ts-core';

// export interface Options {
//   spec: OpenAPIObject;
// }

// export interface GeneratedInterface {
//   statement: ts.Statement;
//   dependencies: string[];
// }

// export default function generateInterfacesFromSpec(options: Options): Array<TupleWithDependencies<ts.Statement>> {
//   const { spec } = options;

//   const output: Array<TupleWithDependencies<ts.Statement>> = [];

//   // if (spec.components) {
//   //   if (spec.components.schemas) output.push(...generateSchemaDefintions(spec.components.schemas));
//   //   if (spec.components.requestBodies) output.push(...generateRequestBodiesDefinition(spec.components.requestBodies));
//   // }

//   return output;
// }
