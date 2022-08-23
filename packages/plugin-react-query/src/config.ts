export interface CustomFetcher {
	func: string;
	isReactHook?: boolean;
}

export type Fetcher = 'fetch' | CustomFetcher;

export interface Overrides {
	useUseQueryForMutation: string[];
}

export interface Config {
	fetcher?: Fetcher;
	overrides?: Overrides;
}
