/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface PullsListCommitsQueryParams {
	per_page?: number;
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
	});

	const json = await response.json();

	return json;
}
