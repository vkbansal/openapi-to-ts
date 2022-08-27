export interface GistsListStarredQueryParams {
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

export interface GistsListStarredProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: GistsListStarredQueryParams;
}

export async function gistsListStarred(props: GistsListStarredProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/gists/starred`, {
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
