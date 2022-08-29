import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Plugin } from '@oa2ts/cli/plugin';

import { generateFetchCalls } from './generateFetchCalls.js';
import type { Config } from './config.js';

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));

export default function fetchPlugin(config?: Config): Plugin {
	return {
		name: 'oa2ts-plugin-fetch',
		generate: generateFetchCalls(config),
		templatesPath: path.resolve(DIR_NAME, 'templates'),
	};
}
