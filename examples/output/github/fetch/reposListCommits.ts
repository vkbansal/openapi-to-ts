export interface ReposListCommitsQueryParams {
	sha?: string;
	path?: string;
	author?: string;
	since?: string;
	until?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
	top?: string;
	last_sha?: string;
}

export interface ReposListCommitsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListCommitsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListCommitsPathParams {
	queryParams: ReposListCommitsQueryParams;
}

export async function reposListCommits(props: ReposListCommitsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/commits`, {
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
