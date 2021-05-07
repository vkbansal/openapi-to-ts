import type { TypeDefinitionWithExports } from '@vkbansal/oa2ts-core';
import type { Statement } from 'typescript';

export interface Config {
  output: string;
  file?: string;
  url?: string;
  transformer?: string;
  plugins?: Record<string, unknown>;
  verbose: boolean;
}

export interface AdvancedConfig
  extends Omit<Config, 'output' | 'file' | 'url'> {
  specs: Record<string, Config>;
}

export type TypeDefinition = TypeDefinitionWithExports<Statement | Statement[]>;
