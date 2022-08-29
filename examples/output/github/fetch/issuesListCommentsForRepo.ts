/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface IssuesListCommentsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListCommentsForRepoQueryParams {
	/**
	 * @default "created"
	 */
	sort?: 'created' | 'updated';
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

export interface IssuesListCommentsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListCommentsForRepoPathParams {
	queryParams: IssuesListCommentsForRepoQueryParams;
}

/**
 * By default, Issue Comments are ordered by ascending ID.
 */
export async function issuesListCommentsForRepo(props: IssuesListCommentsForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/comments`, {
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
