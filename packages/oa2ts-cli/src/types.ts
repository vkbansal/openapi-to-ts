export interface Config {
  output: string;
  file?: string;
  url?: string;
  transformer?: string;
  plugins?: string[];
  prettier?: boolean;
  prettierConfig?: unknown;
}

export interface AdvancedConfig extends Omit<Config, 'output' | 'file' | 'url'> {
  specs: Record<string, Config>;
}
