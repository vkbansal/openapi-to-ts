import fs from 'fs';
import path from 'path';
import * as esbuild from 'esbuild';
import prettier, { type Options as PrettierOptions } from 'prettier';

import type { CLIConfig, PluginReturn, Config } from './config.js';
import { generateSpecFromFileOrUrl } from './generateSpecFromFileOrUrl.js';
import { logInfo } from './helpers.js';

async function writeData(
	data: PluginReturn,
	output: string,
	prettierOptions: PrettierOptions | null,
): Promise<void> {
	const uniqDirs = new Set<string>();

	// collect all the sub directory paths
	data.files.forEach((file) => uniqDirs.add(path.dirname(file.file)));

	// make sure the output directory exists
	if (!fs.existsSync(output)) {
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
}

/**
 * Resolves config and imports spec
 */
export async function generateSpec(argv: CLIConfig): Promise<void> {
	const cwd = process.cwd();
	const prettierConfig = await prettier.resolveConfig(cwd);

	if (argv.config) {
		const configFilePath = path.resolve(cwd, argv.config);

		const result = await esbuild.build({
			entryPoints: { [`oa2ts-${new Date().getTime()}`]: configFilePath },
			outdir: cwd,
		});

		const builtConfigPath = result.outputFiles?.[0]?.path;

		if (!builtConfigPath) {
			throw new Error();
		}

		const config = (await import(builtConfigPath)) as Config;

		await fs.promises.unlink(builtConfigPath);
		// TODO: validate config
		// TODO: add support for picking services
		const services = Object.keys(config.services);

		for (const service of services) {
			const serviceConfig = config.services[service];

			// apply global plugins if local plugins are not present
			if (config.plugins && !serviceConfig.plugins) {
				serviceConfig.plugins = config.plugins;
			}

			const data = await generateSpecFromFileOrUrl(serviceConfig);
			await writeData(data, argv.output, prettierConfig);
		}
	} else {
		const data = await generateSpecFromFileOrUrl(argv);
		await writeData(data, argv.output, prettierConfig);
	}
}
