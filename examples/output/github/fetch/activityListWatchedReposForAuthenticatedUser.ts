/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActivityListWatchedReposForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListWatchedReposForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: ActivityListWatchedReposForAuthenticatedUserQueryParams;
	paramsSerializer?: (params: ActivityListWatchedReposForAuthenticatedUserQueryParams) => string;
}

/**
 * Lists repositories the authenticated user is watching.
 */
export async function activityListWatchedReposForAuthenticatedUser(
	props: ActivityListWatchedReposForAuthenticatedUserProps,
) {
	const { ...rest } = props;

	return _fetcher<unknown, ActivityListWatchedReposForAuthenticatedUserQueryParams, unknown>({
		path: `/user/subscriptions`,
		method: 'GET',
		...rest,
	});
}
