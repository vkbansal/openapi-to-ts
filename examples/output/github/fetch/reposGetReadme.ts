/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ReposGetReadmePathParams {
	owner: string;
	repo: string;
}

export interface ReposGetReadmeQueryParams {
	ref?: string;
}

export interface ReposGetReadmeProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetReadmePathParams {
	queryParams: ReposGetReadmeQueryParams;
}

/**
 * Gets the preferred README for a repository.
 *
 * READMEs support [custom media types](https://docs.github.com/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
 */
export async function reposGetReadme(props: ReposGetReadmeProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/readme`, {
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
