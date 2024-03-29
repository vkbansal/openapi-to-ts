import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { generateSpec } from './generateSpec.js';
import type { CLIConfig } from './config.js';
import { logError } from './helpers.js';

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
					alias: 'o',
					describe: 'Location for the output.',
				})
				.option('config', {
					type: 'string',
					alias: 'c',
					describe: 'Location for the config file.',
				})
				.option('clean', {
					type: 'boolean',
					default: false,
					description: 'Remove the output directory before generating service.',
				})
				.option('service', {
					type: 'array',
					default: [],
					description:
						'Pick the services to generate from a config file. All the services will generated by default.',
				})
				.option('verbose', {
					type: 'boolean',
					describe: 'Shows verbose output',
				})
				.conflicts('file', 'url')
				.check((argv) => {
					if (argv.config) return true;

					if (!argv.output) {
						throw new Error('Missing required argument: output');
					}

					if (!argv.file && !argv.url) {
						throw new Error('Either "--file" or "--url" is required');
					}

					return true;
				});
		},
		(argv) => {
			return generateSpec(argv as CLIConfig);
		},
	)
	.help()
	.fail((msg, err) => {
		if (msg) {
			logError(msg);
		}

		if (err) {
			throw err; // preserve stack
		}

		process.exit(1);
	})
	.demandCommand().argv;
