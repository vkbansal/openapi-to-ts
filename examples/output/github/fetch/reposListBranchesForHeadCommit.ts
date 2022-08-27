/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposListBranchesForHeadCommitPathParams {
	owner: string;
	repo: string;
	commit_sha: string;
}

export interface ReposListBranchesForHeadCommitProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListBranchesForHeadCommitPathParams {}

export async function reposListBranchesForHeadCommit(props: ReposListBranchesForHeadCommitProps) {
	const { owner, repo, commit_sha, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/commits/${commit_sha}/branches-where-head`,
		{
			method: 'GET',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}