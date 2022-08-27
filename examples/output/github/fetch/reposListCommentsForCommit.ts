export interface ReposListCommentsForCommitQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListCommentsForCommitPathParams {
	owner: string;
	repo: string;
	commit_sha: string;
}

export interface ReposListCommentsForCommitProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListCommentsForCommitPathParams {
	queryParams: ReposListCommentsForCommitQueryParams;
}

export async function reposListCommentsForCommit(props: ReposListCommentsForCommitProps) {
	const { owner, repo, commit_sha, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/commits/${commit_sha}/comments`, {
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
