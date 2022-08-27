/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposListCommitCommentsForRepoQueryParams {
	per_page?: number;
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
	});

	const json = await response.json();

	return json;
}
