import swagger2openapi from 'swagger2openapi';
import type { OpenAPIObject } from 'openapi3-ts';
import chalk from 'chalk';

export function convertToOpenAPI(schema: unknown): Promise<OpenAPIObject> {
	return new Promise((resolve, reject) => {
		swagger2openapi.convertObj(schema, {}, (err, convertedObj) => {
			if (err) {
				reject(err);
			} else {
				resolve(convertedObj.openapi);
			}
		});
	});
}

export function logInfo(msg: string): void {
	if (process.env.DEBUG_OA2TS === 'true') {
		console.log(chalk.cyan(`oa2ts: [INFO]: ${msg}`));
	}
}

export function logWarning(msg: string): void {
	console.log(chalk.yellow(`oa2ts: [WARN]: ${msg}`));
}

export function padChunk(chunk: string, spacing = 6): string {
	return chunk
		.split('\n')
		.map((line) => ' '.repeat(spacing) + line)
		.join('\n');
}
