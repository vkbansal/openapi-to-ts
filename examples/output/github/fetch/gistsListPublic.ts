export interface GistsListPublicQueryParams {
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

export interface GistsListPublicProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: GistsListPublicQueryParams;
}

export async function gistsListPublic(props: GistsListPublicProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/gists/public`, {
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
