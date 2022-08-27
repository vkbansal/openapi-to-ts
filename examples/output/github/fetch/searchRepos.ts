export interface SearchReposQueryParams {
	q: string;
	sort?: 'forks' | 'help-wanted-issues' | 'stars' | 'updated';
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

export interface SearchReposProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: SearchReposQueryParams;
}

export async function searchRepos(props: SearchReposProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/search/repositories`, {
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
