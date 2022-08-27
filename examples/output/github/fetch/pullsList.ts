export interface PullsListQueryParams {
	/**
	 * @default "open"
	 */
	state?: 'all' | 'closed' | 'open';
	head?: string;
	base?: string;
	/**
	 * @default "created"
	 */
	sort?: 'created' | 'long-running' | 'popularity' | 'updated';
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface PullsListPathParams {
	owner: string;
	repo: string;
}

export interface PullsListProps extends Omit<RequestInit, 'method' | 'body'>, PullsListPathParams {
	queryParams: PullsListQueryParams;
}

export async function pullsList(props: PullsListProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls`, {
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
