/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActivityListWatchersForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActivityListWatchersForRepoQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListWatchersForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListWatchersForRepoPathParams {
	queryParams: ActivityListWatchersForRepoQueryParams;
	paramsSerializer?: (params: ActivityListWatchersForRepoQueryParams) => string;
}

/**
 * Lists the people watching the specified repository.
 */
export async function activityListWatchersForRepo(props: ActivityListWatchersForRepoProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, ActivityListWatchersForRepoQueryParams, unknown>({
		path: `/repos/${owner}/${repo}/subscribers`,
		method: 'GET',
		...rest,
	});
}
