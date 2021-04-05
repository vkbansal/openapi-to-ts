import { cosmiconfigSync } from 'cosmiconfig';
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { importSpec } from './importSpec';
import { validateAdvancedConfig } from './helpers';
import type { Config } from './types';
// import schema from './options-schema.json';
// import type { Config, AdvancedConfig } from './types';

const NAME = 'oa2ts';

const explorer = cosmiconfigSync(NAME);
const result = explorer.search();

if (result) {
  console.log(chalk.bold(`Using config from "${result.filepath}"`));

  try {
    validateAdvancedConfig(result.config);
  } catch (e) {
    console.log(chalk.bold.red('Invalid configuration found!'));
    console.log(chalk.bold.red(e.message));
  }

  // const ajv = new Ajv({ allErrors: true });
  // const validate = ajv.compile(schema);
  // const valid = validate(result.config);

  // if (!valid && Array.isArray(validate.errors)) {
  //   console.log(chalk.bold.red('Invalid configuration found!'));
  //   validate.errors.forEach(({ instancePath, message }) => console.log(`${instancePath} ${message}`));
  //   process.exit(1);
  // }
}

yargs(hideBin(process.argv))
  .scriptName(NAME)
  .usage('Usage: $0 <cmd> [args]')
  .command(
    'import',
    'Import OpenAPI specification and output TypeScript code',
    args => {
      return args
        .option('file', {
          type: 'string',
          describe: 'Path to OpenAPI spec file'
        })
        .option('url', {
          type: 'string',
          describe: 'URL to remote OpenAPI spec file'
        })
        .option('output', {
          type: 'string',
          describe: 'Location for the output. If a file is given, all the definitions will be output to'
        })
        .option('verbose', {
          type: 'boolean',
          describe: 'Shows verbose output'
        })
        .conflicts('file', 'url')
        .check(argv => {
          if (result) return true;

          if (!argv.file || !argv.url) {
            throw new Error('Either "--file" or "--url" is required');
          }

          return true;
        });
    },
    argv => importSpec(argv as Config, result?.config)
  )
  .help().argv;
