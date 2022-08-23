import type { OpenAPIObject } from 'openapi3-ts';
import * as Yup from 'yup';

import { getPluginSchema, type Plugin } from './plugin.js';

export interface CLIConfig {
	output: string;
	file?: string;
	url?: string;
	config?: string;
}

export const getServiceConfigSchema = (): Yup.AnyObjectSchema =>
	Yup.object({
		output: Yup.string().required(),
		file: Yup.string(),
		url: Yup.string(),
		transformer: Yup.mixed().test(function (value) {
			if (value && typeof value !== 'function') {
				return this.createError({ message: `Expected to be a function, but got: ${typeof value}` });
			}

			return true;
		}),
		plugins: Yup.array(getPluginSchema().required()),
	}).test(function (obj: any) {
		if ((!obj.file || !obj.file.length) && (!obj.url || !obj.url.length)) {
			return this.createError({ message: 'Either file or url is required' });
		}

		return true;
	});

export const getConfigSchema = (): Yup.AnyObjectSchema =>
	Yup.object({
		plugins: Yup.array(getPluginSchema().required()),
		services: Yup.lazy((obj) => {
			const schema = Object.keys(obj).reduce(
				(p, c) => ({ ...p, [c]: getServiceConfigSchema().required() }),
				{},
			);
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
