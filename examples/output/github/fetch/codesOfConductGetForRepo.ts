/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface CodesOfConductGetForRepoPathParams {
	owner: string;
	repo: string;
}

export interface CodesOfConductGetForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		CodesOfConductGetForRepoPathParams {}

export async function codesOfConductGetForRepo(props: CodesOfConductGetForRepoProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/community/code_of_conduct`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}