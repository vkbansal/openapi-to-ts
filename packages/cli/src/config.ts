import type { OpenAPIObject } from 'openapi3-ts';

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
