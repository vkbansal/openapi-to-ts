export interface PullsListCommitsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface PullsListCommitsPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsListCommitsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsListCommitsPathParams {
	queryParams: PullsListCommitsQueryParams;
}

export async function pullsListCommits(props: PullsListCommitsProps) {
	const { owner, repo, pull_number, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}/commits`, {
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
