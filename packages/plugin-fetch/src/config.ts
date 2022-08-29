export interface CustomFetcher {
	path: string;
	name: string;
}

export interface Config {
	customFetcher?: CustomFetcher;
}
