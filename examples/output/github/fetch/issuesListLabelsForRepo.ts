/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface IssuesListLabelsForRepoQueryParams {
	per_page?: number;
	page?: number;
}

export interface IssuesListLabelsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListLabelsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListLabelsForRepoPathParams {
	queryParams: IssuesListLabelsForRepoQueryParams;
}

export async function issuesListLabelsForRepo(props: IssuesListLabelsForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/labels`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
