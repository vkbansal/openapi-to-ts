/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ReposListReleasesPathParams {
	owner: string;
	repo: string;
}

export interface ReposListReleasesQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListReleasesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListReleasesPathParams {
	queryParams: ReposListReleasesQueryParams;
}

/**
 * This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/rest/reference/repos#list-repository-tags).
 *
 * Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.
 */
export async function reposListReleases(props: ReposListReleasesProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/releases`, {
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
