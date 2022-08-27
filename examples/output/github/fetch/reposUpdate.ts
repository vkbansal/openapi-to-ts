/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposUpdatePathParams {
	owner: string;
	repo: string;
}

export interface ReposUpdateProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposUpdatePathParams {}

export async function reposUpdate(props: ReposUpdateProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}`, {
		method: 'PATCH',
		...rest,
	});

	const json = await response.json();

	return json;
}
