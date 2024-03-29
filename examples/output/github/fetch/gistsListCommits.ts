/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface GistsListCommitsPathParams {
	gist_id: string;
}

export interface GistsListCommitsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface GistsListCommitsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GistsListCommitsPathParams {
	queryParams: GistsListCommitsQueryParams;
	paramsSerializer?: (params: GistsListCommitsQueryParams) => string;
}

/**
 *
 */
export async function gistsListCommits(props: GistsListCommitsProps) {
	const { gist_id, ...rest } = props;

	return _fetcher<unknown, GistsListCommitsQueryParams, unknown>({
		path: `/gists/${gist_id}/commits`,
		method: 'GET',
		...rest,
	});
}
