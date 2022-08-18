export interface PluginConfig {
  noHooks?: boolean;
  noComponents?: boolean;
  customImport?: unknown;
  customProps?: {
    base?: unknown;
  };
}
