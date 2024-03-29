/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface GistsListPublicQueryParams {
	since?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface GistsListPublicProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: GistsListPublicQueryParams;
	paramsSerializer?: (params: GistsListPublicQueryParams) => string;
}

/**
 * List public gists sorted by most recently updated to least recently updated.
 *
 * Note: With [pagination](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
 */
export async function gistsListPublic(props: GistsListPublicProps) {
	const { ...rest } = props;

	return _fetcher<unknown, GistsListPublicQueryParams, unknown>({
		path: `/gists/public`,
		method: 'GET',
		...rest,
	});
}
