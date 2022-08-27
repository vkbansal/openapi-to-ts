/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface PullsGetPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsGetProps extends Omit<RequestInit, 'method' | 'body'>, PullsGetPathParams {}

export async function pullsGet(props: PullsGetProps) {
	const { owner, repo, pull_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}