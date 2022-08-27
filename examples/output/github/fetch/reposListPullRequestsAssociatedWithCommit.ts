export interface ReposListPullRequestsAssociatedWithCommitQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListPullRequestsAssociatedWithCommitPathParams {
	owner: string;
	repo: string;
	commit_sha: string;
}

export interface ReposListPullRequestsAssociatedWithCommitProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListPullRequestsAssociatedWithCommitPathParams {
	queryParams: ReposListPullRequestsAssociatedWithCommitQueryParams;
}

export async function reposListPullRequestsAssociatedWithCommit(
	props: ReposListPullRequestsAssociatedWithCommitProps,
) {
	const { owner, repo, commit_sha, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/commits/${commit_sha}/pulls`, {
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
