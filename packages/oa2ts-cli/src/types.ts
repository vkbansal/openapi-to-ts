export interface Config {
  output: string;
  file?: string;
  url?: string;
  transformer?: string;
  plugins?: string[];
}

export interface AdvancedConfig
  extends Omit<Config, 'output' | 'file' | 'url'> {
  specs: Record<string, Config>;
}
