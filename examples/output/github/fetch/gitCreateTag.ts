/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface GitCreateTagPathParams {
	owner: string;
	repo: string;
}

export interface GitCreateTagProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitCreateTagPathParams {}

export async function gitCreateTag(props: GitCreateTagProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/git/tags`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}
