export interface FetcherProps<TQueryParams, TBody> extends Omit<RequestInit, 'body' | 'method'> {
	path: string;
	method: string;
	queryParams?: TQueryParams;
	body?: TBody;
	queryParamsSerializer?: (params: TQueryParams) => string;
}

export async function fetcher<TData, TQueryParams, TBody>(
	props: FetcherProps<TQueryParams, TBody>,
): Promise<TData> {
	const { path, method, body, queryParams, queryParamsSerializer, ...rest } = props;

	let finalPath = path;

	if (queryParams) {
		finalPath += `?`;

		if (typeof queryParamsSerializer === 'function') {
			finalPath += queryParamsSerializer(queryParams);
		} else {
			finalPath += new URLSearchParams(queryParams as unknown as Record<string, string>).toString();
		}
	}

	const response = await fetch(finalPath, {
		method,
		body: body ? JSON.stringify(body) : undefined,
		...rest,
	});

	const json = await response.json();

	return json;
}
