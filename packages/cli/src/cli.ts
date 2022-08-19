// import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { generateSpec } from './generateSpec';
import type { CLIConfig } from './config';

const NAME = 'oa2ts';

yargs(hideBin(process.argv))
	.scriptName(NAME)
	.usage('Usage: $0 <cmd> [args]')
	.command(
		'import',
		'Import OpenAPI specification and output TypeScript code',
		(args) => {
			return args
				.option('file', {
					type: 'string',
					describe: 'Path to OpenAPI spec file. Can be either a JSON or YAML file.',
				})
				.option('url', {
					type: 'string',
					describe: 'URL to remote OpenAPI spec file.',
				})
				.option('output', {
					type: 'string',
					describe: 'Location for the output.',
				})
				.option('config', {
					type: 'string',
					describe: 'Location for the config file.',
				})
				.option('verbose', {
					type: 'boolean',
					describe: 'Shows verbose output',
				})
				.conflicts('file', 'url')
				.check((argv) => {
					if (argv.config) return true;

					if (!argv.file || !argv.url) {
						throw new Error('Either "--file" or "--url" is required');
					}

					return true;
				});
		},
		(argv) => {
			return generateSpec(argv as CLIConfig);
		},
	)
	.demandCommand()
	.help().argv;
