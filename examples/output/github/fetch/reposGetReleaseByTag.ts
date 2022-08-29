/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ReposGetReleaseByTagPathParams {
	owner: string;
	repo: string;
	tag: string;
}

export interface ReposGetReleaseByTagProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetReleaseByTagPathParams {}

/**
 * Get a published release with the specified tag.
 */
export async function reposGetReleaseByTag(props: ReposGetReleaseByTagProps) {
	const { owner, repo, tag, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/releases/tags/${tag}`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
