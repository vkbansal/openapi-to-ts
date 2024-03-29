/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposListPublicQueryParams {
	since?: number;
}

export interface ReposListPublicProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: ReposListPublicQueryParams;
	paramsSerializer?: (params: ReposListPublicQueryParams) => string;
}

/**
 * Lists all public repositories in the order that they were created.
 *
 * Notes:
 * - For GitHub Enterprise Server and GitHub AE, this endpoint will only list repositories available to all users on the enterprise.
 * - Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.
 */
export async function reposListPublic(props: ReposListPublicProps) {
	const { ...rest } = props;

	return _fetcher<unknown, ReposListPublicQueryParams, unknown>({
		path: `/repositories`,
		method: 'GET',
		...rest,
	});
}
