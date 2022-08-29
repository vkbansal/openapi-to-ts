/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface GitGetTreePathParams {
	owner: string;
	repo: string;
	tree_sha: string;
}

export interface GitGetTreeQueryParams {
	recursive?: string;
}

export interface GitGetTreeProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitGetTreePathParams {
	queryParams: GitGetTreeQueryParams;
}

/**
 * Returns a single tree using the SHA1 value for that tree.
 *
 * If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.
 */
export async function gitGetTree(props: GitGetTreeProps) {
	const { owner, repo, tree_sha, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/git/trees/${tree_sha}`, {
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
