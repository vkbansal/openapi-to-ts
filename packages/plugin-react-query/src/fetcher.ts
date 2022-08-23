export type CustomFetcher<TData, TVariables> = (
	operation: string,
	variables?: TVariables,
	options?: RequestInit['headers'],
) => () => Promise<TData>;

export type CustomFetcherHook<TData, TVariables> = (
	operation: string,
	options?: RequestInit['headers'],
) => (variables?: TVariables) => Promise<TData>;
