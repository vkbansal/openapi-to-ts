/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposGetPagesPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetPagesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetPagesPathParams {}

export async function reposGetPages(props: ReposGetPagesProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pages`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
