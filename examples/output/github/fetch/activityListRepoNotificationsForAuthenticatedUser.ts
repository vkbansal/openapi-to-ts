/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActivityListRepoNotificationsForAuthenticatedUserPathParams {
	owner: string;
	repo: string;
}

export interface ActivityListRepoNotificationsForAuthenticatedUserQueryParams {
	all?: boolean;
	participating?: boolean;
	since?: string;
	before?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListRepoNotificationsForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListRepoNotificationsForAuthenticatedUserPathParams {
	queryParams: ActivityListRepoNotificationsForAuthenticatedUserQueryParams;
	paramsSerializer?: (
		params: ActivityListRepoNotificationsForAuthenticatedUserQueryParams,
	) => string;
}

/**
 * List all notifications for the current user.
 */
export async function activityListRepoNotificationsForAuthenticatedUser(
	props: ActivityListRepoNotificationsForAuthenticatedUserProps,
) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, ActivityListRepoNotificationsForAuthenticatedUserQueryParams, unknown>({
		path: `/repos/${owner}/${repo}/notifications`,
		method: 'GET',
		...rest,
	});
}
