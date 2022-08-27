export interface ReposGetCommitQueryParams {
	/**
	 * @default 1
	 */
	page?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
}

export interface ReposGetCommitPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface ReposGetCommitProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetCommitPathParams {
	queryParams: ReposGetCommitQueryParams;
}

export async function reposGetCommit(props: ReposGetCommitProps) {
	const { owner, repo, ref, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/commits/${ref}`, {
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
