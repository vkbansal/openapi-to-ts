/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface PullsListReviewCommentsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface PullsListReviewCommentsForRepoQueryParams {
	sort?: 'created' | 'created_at' | 'updated';
	direction?: 'asc' | 'desc';
	since?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface PullsListReviewCommentsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsListReviewCommentsForRepoPathParams {
	queryParams: PullsListReviewCommentsForRepoQueryParams;
}

/**
 * Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.
 */
export async function pullsListReviewCommentsForRepo(props: PullsListReviewCommentsForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/comments`, {
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
