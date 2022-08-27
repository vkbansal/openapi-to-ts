export interface SearchCodeQueryParams {
	q: string;
	sort?: 'indexed';
	/**
	 * @default "desc"
	 */
	order?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface SearchCodeProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: SearchCodeQueryParams;
}

export async function searchCode(props: SearchCodeProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/search/code`, {
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
