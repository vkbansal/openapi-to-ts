/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface LicensesGetForRepoPathParams {
	owner: string;
	repo: string;
}

export interface LicensesGetForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		LicensesGetForRepoPathParams {}

/**
 * This method returns the contents of the repository's license file, if one is detected.
 *
 * Similar to [Get repository content](https://docs.github.com/rest/reference/repos#get-repository-content), this method also supports [custom media types](https://docs.github.com/rest/overview/media-types) for retrieving the raw license content or rendered license HTML.
 */
export async function licensesGetForRepo(props: LicensesGetForRepoProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/license`, {
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
