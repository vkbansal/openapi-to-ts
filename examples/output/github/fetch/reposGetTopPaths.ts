/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposGetTopPathsPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetTopPathsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetTopPathsPathParams {}

export async function reposGetTopPaths(props: ReposGetTopPathsProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/traffic/popular/paths`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}