export interface CustomFetcher {
	path: string;
	name: string;
	props: string;
	isReactHook?: boolean;
}

export type Fetcher = 'fetch' | CustomFetcher;

export interface Overrides {
	[operationId: string]: {
		useQuery?: boolean;
	};
}

export interface Config {
	fetcher?: Fetcher;
	overrides?: Overrides;
}
