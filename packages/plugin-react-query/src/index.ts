import type { Plugin } from '@oa2ts/cli/plugin';

import type { Config } from './config.js';
import { generateReactQueryHooks } from './generateReactQueryHooks.js';

export default function reactQueryPlugin(config: Config): Plugin {
	return {
		name: 'oa2ts-plugin-react-query',
		generate: generateReactQueryHooks(config),
	};
}
