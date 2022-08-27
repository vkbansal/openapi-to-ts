export interface SearchCommitsQueryParams {
	q: string;
	sort?: 'author-date' | 'committer-date';
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

export interface SearchCommitsProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: SearchCommitsQueryParams;
}

export async function searchCommits(props: SearchCommitsProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/search/commits`, {
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
