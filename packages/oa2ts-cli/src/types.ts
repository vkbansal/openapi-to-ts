export interface Config {
  output: string;
  file?: string;
  url?: string;
  transformer?: string;
  plugins?: string[];
}

export interface AdvancedConfig {
  prettier?: boolean;
  prettierConfig?: unknown;
  specs: Record<string, Config>;
}
