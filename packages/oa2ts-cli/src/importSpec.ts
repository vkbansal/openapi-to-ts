import fs from 'fs';
import path from 'path';

import { defaultsDeep } from 'lodash';
import yaml from 'js-yaml';
import type { OpenAPIObject } from 'openapi3-ts';
import {
  createSchemaDefinitions,
  createRequestBodyDefinitions
} from '@vkbansal/oa2ts-core';

import type { Config, AdvancedConfig, TypeDefinition } from './types';
import { writeToDir } from './writeToDir';
import { writeToFile } from './writeToFile';
import {
  convertToOpenAPI,
  logInfo,
  logWarning,
  padChunk,
  printFile
} from './helpers';

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
  const { verbose } = config;

  logInfo(verbose, 'Parsing data');
  let spec: OpenAPIObject =
    format === 'yaml' ? yaml.load(content) : JSON.parse(content);

  // transform the spec using given transformer
  if (config.transformer) {
    logInfo(verbose, `Transforming schema using "${config.transformer}"`);

    const transformer = await import(config.transformer);

    if (typeof transformer !== 'function') {
      throw new Error(
        `Expected default export of the transformer "${
          config.transformer
        }" to be a function. Got "${typeof transformer}" instead`
      );
    }

    spec = transformer(spec);
  }

  if (!spec.info || !spec.info.version.startsWith('3.0')) {
    logInfo(verbose, 'Converting spec from Swagger to OpenAPI');
    spec = await convertToOpenAPI(spec);
  }

  logInfo(verbose, 'Generating schema definitions');
  const schemaDefs = createSchemaDefinitions(spec.components?.schemas);

  logInfo(verbose, 'Generating request body definitions');
  const requestBodyDefs = createRequestBodyDefinitions(
    spec.components?.requestBodies
  );

  // placeholder for plugin data
  let pluginsData: Array<Map<string, TypeDefinition>> = [];

  // run all the plugins
  const pluginEntries = Object.entries(config.plugins || {}).filter(
    ([_key, pluginConfig]) => !!pluginConfig
  );

  if (pluginEntries.length > 0) {
    const pluginsDataPromises = pluginEntries.map(
      async ([name, pluginConfig]) => {
        logInfo(verbose, `Running plugin: "${name}"`);

        const { plugin } = await import(name);

        if (typeof plugin !== 'function') {
          throw new Error(
            `Expected "${name}" to have an exported function named "plugin". Got "${typeof plugin}" instead`
          );
        }

        return plugin(spec, pluginConfig);
      }
    );

    pluginsData = await Promise.all(pluginsDataPromises);
  }

  // placeholder for all the generated statements, including plugins
  const allStatements = new Map<string, TypeDefinition>();

  function updateAllStatements(value: TypeDefinition, key: string): void {
    if (allStatements.has(key)) {
      let warning = `Duplicate entry for "${key}" found, this might lead to undesired consequences.`;

      if (verbose) {
        warning += `\n${padChunk(
          printFile(
            Array.isArray(value.statements)
              ? value.statements
              : [value.statements]
          ),
          8
        )}`;
      }

      logWarning(warning);
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
    const ext = path.extname(config.file);
    const format = /\.ya?ml$/i.test(ext) ? 'yaml' : 'json';
    const filePath = path.resolve(process.cwd(), config.file);

    logInfo(config.verbose, `Detected format: ${format}`);
    logInfo(config.verbose, `Reading file "${filePath}"`);

    const content = await fs.promises.readFile(filePath, 'utf8');

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

    const tasks = Object.entries(config.specs).map(([key, conf]) => {
      const resolvedConf = defaultsDeep(conf, restConfig);

      resolvedConf.verbose = argv.verbose;

      logInfo(resolvedConf.verbose, `Generating code for "${key}" spec`);

      return generate(resolvedConf);
    });

    await Promise.all(tasks);
  } else {
    await generate(argv);
  }
}
