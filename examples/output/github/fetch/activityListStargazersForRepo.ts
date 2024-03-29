/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActivityListStargazersForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActivityListStargazersForRepoQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListStargazersForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListStargazersForRepoPathParams {
	queryParams: ActivityListStargazersForRepoQueryParams;
	paramsSerializer?: (params: ActivityListStargazersForRepoQueryParams) => string;
}

/**
 * Lists the people that have starred the repository.
 *
 * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header:
 */
export async function activityListStargazersForRepo(props: ActivityListStargazersForRepoProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, ActivityListStargazersForRepoQueryParams, unknown>({
		path: `/repos/${owner}/${repo}/stargazers`,
		method: 'GET',
		...rest,
	});
}
