export interface GitGetTreeQueryParams {
	recursive?: string;
}

export interface GitGetTreePathParams {
	owner: string;
	repo: string;
	tree_sha: string;
}

export interface GitGetTreeProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitGetTreePathParams {
	queryParams: GitGetTreeQueryParams;
}

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
