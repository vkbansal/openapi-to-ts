/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposGetAllEnvironmentsPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetAllEnvironmentsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetAllEnvironmentsPathParams {}

export async function reposGetAllEnvironments(props: ReposGetAllEnvironmentsProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/environments`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}