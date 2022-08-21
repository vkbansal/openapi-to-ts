import type { OpenAPIObject } from 'openapi3-ts';
import * as Yup from 'yup';

export interface CodeOutput {
	code: string;
	file: string;
}

export interface PluginReturn {
	files: CodeOutput[];
	indexInclude?: string;
}

export interface Plugin {
	name: string;
	generate: (spec: Readonly<OpenAPIObject>) => Promise<PluginReturn>;
}

export interface CLIConfig {
	output: string;
	file?: string;
	url?: string;
	config?: string;
}

export const codeOutputSchema = Yup.object({
	code: Yup.string().required(),
	file: Yup.string().required(),
}).required();

export const pluginReturnSchema = Yup.object({
	files: Yup.array(codeOutputSchema).min(1).required(),
	indexInclude: Yup.string(),
}).required();

export const pluginSchema = Yup.object({
	name: Yup.string().required(),
	generate: Yup.mixed()
		.test(function (value) {
			if (typeof value !== 'function') {
				return this.createError({ message: `Expected to be a function, but got: ${typeof value}` });
			}

			return true;
		})
		.required(),
}).required();

export const serviceConfigSchema = Yup.object({
	output: Yup.string().required(),
	file: Yup.string().when('url', {
		is: (val: unknown) => typeof val === 'string',
		then: (schema) => schema.notRequired(),
		otherwise: (schema) => schema.required(),
	}),
	url: Yup.string().when('file', {
		is: (val: unknown) => typeof val === 'string',
		then: (schema) => schema.notRequired(),
		otherwise: (schema) => schema.required(),
	}),
	transformer: Yup.mixed().test(function (value) {
		if (typeof value !== 'function') {
			return this.createError({ message: `Expected to be a function, but got: ${typeof value}` });
		}

		return true;
	}),
	plugins: Yup.array(pluginSchema),
}).required();

export const configSchema = Yup.object({
	plugins: Yup.array(pluginSchema),
	services: Yup.lazy((obj) => {
		const schema = Object.keys(obj).reduce((p, c) => ({ ...p, [c]: serviceConfigSchema }), {});
		return Yup.object(schema).required();
	}),
});

export interface ServiceConfig {
	output: string;
	file?: string;
	url?: string;
	transformer?: (spec: Readonly<OpenAPIObject>) => OpenAPIObject;
	plugins?: Plugin[];
}

export interface Config {
	plugins?: Plugin[];
	services: Record<string, ServiceConfig>;
}

export function defineConfig(config: Config): Config {
	return config;
}
