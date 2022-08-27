/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface IssuesListCommentsForRepoQueryParams {
	sort?: 'created' | 'updated';
	direction?: 'asc' | 'desc';
	since?: string;
	per_page?: number;
	page?: number;
}

export interface IssuesListCommentsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListCommentsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListCommentsForRepoPathParams {
	queryParams: IssuesListCommentsForRepoQueryParams;
}

export async function issuesListCommentsForRepo(props: IssuesListCommentsForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/comments`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
