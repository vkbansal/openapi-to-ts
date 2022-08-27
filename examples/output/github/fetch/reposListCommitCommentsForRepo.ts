export interface ReposListCommitCommentsForRepoQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListCommitCommentsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ReposListCommitCommentsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListCommitCommentsForRepoPathParams {
	queryParams: ReposListCommitCommentsForRepoQueryParams;
}

export async function reposListCommitCommentsForRepo(props: ReposListCommitCommentsForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/comments`, {
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
