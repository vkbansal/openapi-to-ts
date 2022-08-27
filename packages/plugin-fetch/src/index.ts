import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Plugin } from '@oa2ts/cli/plugin';

import { generateFetchCalls } from './generateFetchCalls.js';

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));

export default function fetchPlugin(): Plugin {
	return {
		name: 'oa2ts-plugin-fetch',
		generate: generateFetchCalls(),
		templatesPath: path.resolve(DIR_NAME, 'templates'),
	};
}
