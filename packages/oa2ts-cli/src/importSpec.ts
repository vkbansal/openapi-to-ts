import fs from 'fs';
import path from 'path';

import _ from 'lodash';
import yaml from 'js-yaml';
import chalk from 'chalk';
import type { OpenAPIObject } from 'openapi3-ts';
import {
  generateSchemaDefintion,
  generateRequestBodyDefinition
} from '@vkbansal/oa2ts-core';
import type { ObjectWithDependencies } from '@vkbansal/oa2ts-utils';

import type { Config, AdvancedConfig } from './types';
import { writeToDir } from './writeToDir';
import { writeToFile } from './writeToFile';

export interface ImportOpenAPIArgs {
  content: string;
  format: 'json' | 'yaml';
  config: Config;
}

async function importOpenAPI({
  content,
  format,
  config
}: ImportOpenAPIArgs): Promise<void> {
  let spec: OpenAPIObject =
    format === 'yaml' ? yaml.load(content) : JSON.parse(content);

  // transform the spec using given transformer
  if (config.transformer) {
    const transformer = await import(config.transformer);

    spec = transformer(spec);
  }

  // generate definition for all the schemas
  const schemaDefs = generateSchemaDefintion(spec.components?.schemas);

  // generate definitions for all the request bodies
  const requestBodyDefs = generateRequestBodyDefinition(
    spec.components?.requestBodies
  );

  // placeholder fr plugin data
  let pluginsData: Array<Map<string, ObjectWithDependencies>> = [];

  // run all the plugins
  if (Array.isArray(config.plugins) && config.plugins.length > 0) {
    const pluginsDataPromises = config.plugins.map(async name => {
      const plugin = await import(name);

      return plugin(spec);
    });

    pluginsData = await Promise.all(pluginsDataPromises);
  }

  // placeholder for all the generated statements, including plugins
  const allStatements = new Map<string, ObjectWithDependencies>();

  function updateAllStatements(
    value: ObjectWithDependencies,
    key: string
  ): void {
    if (allStatements.has(key)) {
      console.log(
        chalk.bold.yellow(
          `Warning: duplicate entry for "${key}" found, this might lead to undesired consequences`
        )
      );
    }

    allStatements.set(key, value);
  }

  // update `allStatements`
  schemaDefs.forEach(updateAllStatements);
  requestBodyDefs.forEach(updateAllStatements);
  pluginsData.forEach(pluginData => pluginData.forEach(updateAllStatements));

  // check is output is a dir or a file
  const isOutDir = path.extname(config.output) === '';

  if (isOutDir) {
    // for a directory write each definition to its own file
    await writeToDir(config, allStatements);
  } else {
    // output to a single file
    await writeToFile(config, allStatements);
  }
}

async function generate(config: Config): Promise<void> {
  if (config.file) {
    const content = await fs.promises.readFile(
      path.resolve(process.cwd(), config.file),
      'utf8'
    );
    const ext = path.extname(config.file);
    const format = /\.ya?ml$/i.test(ext) ? 'yaml' : 'json';

    await importOpenAPI({ content, format, config });
  } else if (config.url) {
    // read from URL
  }
}

export async function importSpec(
  argv: Config,
  config: AdvancedConfig | null
): Promise<void> {
  if (config) {
    const { specs, ...restConfig } = config;

    const tasks = _.map(config.specs, (conf, key) => {
      const resolvedConf = _.defaults(conf, restConfig);

      console.log(chalk.yellow(`Generating code for ${key}`));

      return generate(resolvedConf);
    });

    await Promise.all(tasks);
  } else {
    await generate(argv);
  }
}
