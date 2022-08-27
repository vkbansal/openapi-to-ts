import path from 'node:path';

import chokidar from 'chokidar';

const watcher = chokidar.watch('./packages/*/src/**/*.ts', { ignored: ['node_modules'] });

watcher.on('change', (file) => {
	console.log(`changed file: ${file}`);
});

const watchedPaths = watcher.getWatched();

console.log(`Wathcing files`);
