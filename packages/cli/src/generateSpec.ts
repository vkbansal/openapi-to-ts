/* eslint-disable import/no-named-as-default-member */
import fs from 'fs';
import path from 'path';
import * as esbuild from 'esbuild';
import prettier from 'prettier';
import { ValidationError } from 'yup';

import type { CLIConfig, Config } from './config.js';
import type { PluginReturn } from './plugin.js';
import { getConfigSchema } from './config.js';
import { generateSpecFromFileOrUrl } from './generateSpecFromFileOrUrl.js';
import { logError, logInfo } from './helpers.js';

async function writeData(
	data: PluginReturn,
	output: string,
	prettierOptions: prettier.Options | null,
): Promise<void> {
	const uniqDirs = new Set<string>();

	// collect all the sub directory paths
	data.files.forEach((file) => {
		uniqDirs.add(path.dirname(file.file));
	});

	// make sure the output directory exists
	if (!fs.existsSync(output)) {
		logInfo(`Creating output directory: ${output}`);
		await fs.promises.mkdir(output, { recursive: true });
	}

	// make sure all the sub directories exits
	for (const dir of uniqDirs) {
		const fullPath = path.resolve(output, dir);

		if (!fs.existsSync(fullPath)) {
			await fs.promises.mkdir(fullPath, { recursive: true });
		}
	}

	for (const file of data.files) {
		logInfo(`Prettifying file: ${file.file}`);
		const formattedCode = prettier.format(file.code, {
			...(prettierOptions || {}),
			parser: 'typescript',
		});
		logInfo(`Writing file: ${file.file}`);
		await fs.promises.writeFile(path.resolve(output, file.file), formattedCode, 'utf8');
	}

	if (data.indexInclude) {
		logInfo(`Prettifying file: index.ts`);
		const formattedCode = prettier.format(data.indexInclude, {
			...(prettierOptions || {}),
			parser: 'typescript',
		});

		logInfo(`Writing file: index.ts`);
		await fs.promises.writeFile(path.resolve(output, 'index.ts'), formattedCode, 'utf8');
	}
}

/**
 * Resolves config and imports spec
 */
export async function generateSpec(argv: CLIConfig): Promise<void> {
	const cwd = process.cwd();
	const prettierConfig = await prettier.resolveConfig(cwd);

	if (argv.config) {
		logInfo(`using config file: ${argv.config}`);
		const configFilePath = path.resolve(cwd, argv.config);
		logInfo(`Resolve config file to: ${configFilePath}`);
		const builtConfig = `oa2ts.config.${new Date().getTime()}`;
		const builtConfigPath = path.resolve(cwd, `${builtConfig}.js`);

		logInfo(`Building config file: ${argv.config}`);
		await esbuild.build({
			entryPoints: { [builtConfig]: configFilePath },
			target: 'node16',
			outdir: cwd,
		});

		logInfo(`Loading built config file: ${builtConfigPath}`);
		const { default: config } = (await import(builtConfigPath)) as { default: Config };
		logInfo(`Unlinking built config file: ${builtConfigPath}`);
		await fs.promises.unlink(builtConfigPath);

		try {
			await getConfigSchema().validate(config);
		} catch (e) {
			if (e instanceof ValidationError) {
				logError(e.errors.join('\n'));
				process.exit(1);
			} else {
				throw e;
			}
		}

		// TODO: add support for picking services
		const services = Object.keys(config.services);

		for (const service of services) {
			const serviceConfig = config.services[service];

			// apply global plugins if local plugins are not present
			if (config.plugins && !serviceConfig.plugins) {
				serviceConfig.plugins = config.plugins;
			}

			const data = await generateSpecFromFileOrUrl(serviceConfig);
			await writeData(data, serviceConfig.output, prettierConfig);
		}
	} else {
		const data = await generateSpecFromFileOrUrl(argv);
		await writeData(data, argv.output, prettierConfig);
	}
}
