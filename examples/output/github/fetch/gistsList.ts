export interface GistsListQueryParams {
	since?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface GistsListProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: GistsListQueryParams;
}

export async function gistsList(props: GistsListProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/gists`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
