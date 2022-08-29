/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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
	paramsSerializer?: (params: ReposGetReadmeQueryParams) => string;
}

/**
 * Gets the preferred README for a repository.
 *
 * READMEs support [custom media types](https://docs.github.com/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
 */
export async function reposGetReadme(props: ReposGetReadmeProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, ReposGetReadmeQueryParams, unknown>({
		path: `/repos/${owner}/${repo}/readme`,
		method: 'GET',
		...rest,
	});
}
