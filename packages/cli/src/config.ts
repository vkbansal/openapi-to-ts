import type { OpenAPIObject } from 'openapi3-ts';
import { z } from 'zod';

export interface CodeOutput {
	code: string;
	file: string;
}

export interface PluginReturn {
	files: CodeOutput[];
	indexInclude?: string;
}

// export interface Plugin {
// 	name: string;
// 	generate: (spec: Readonly<OpenAPIObject>) => Promise<PluginReturn>;
// }

export interface CLIConfig {
	output: string;
	file?: string;
	url?: string;
	config?: string;
}

const plugin = z.object({
	name: z.string(),
	generate: z.function(),
});

const config = z.object({
	plugins: z.array(plugin).optional(),
	services: z.record(
		z.object({
			output: z.string(),
			file: z.string().optional(),
			url: z.string().optional(),
			plugins: z.array(plugin).optional(),
		}),
	),
});

export type Config = z.infer<typeof config>;
export type Plugin = z.infer<typeof plugin>;

export interface ServiceConfig {
	output: string;
	file?: string;
	url?: string;
	transformer?: (spec: Readonly<OpenAPIObject>) => OpenAPIObject;
	plugins?: Plugin[];
}

// export interface Config {
// 	plugins?: Plugin[];
// 	services: Record<string, ServiceConfig>;
// }

export function defineConfig(config: Config): Config {
	return config;
}
