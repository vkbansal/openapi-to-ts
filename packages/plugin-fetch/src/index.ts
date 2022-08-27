import type { Plugin } from '@oa2ts/cli/plugin';

import { generateFetchCalls } from './generateFetchCalls.js';

export default function reactQueryPlugin(): Plugin {
	return {
		name: 'oa2ts-plugin-fetch',
		generate: generateFetchCalls(),
	};
}
