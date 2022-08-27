/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface PullsUpdateBranchPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsUpdateBranchProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsUpdateBranchPathParams {}

export async function pullsUpdateBranch(props: PullsUpdateBranchProps) {
	const { owner, repo, pull_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}/update-branch`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}