/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ActivityListRepoNotificationsForAuthenticatedUserPathParams {
	owner: string;
	repo: string;
}

export interface ActivityListRepoNotificationsForAuthenticatedUserQueryParams {
	all?: boolean;
	participating?: boolean;
	since?: string;
	before?: string;
	per_page?: number;
	page?: number;
}

export interface UseActivityListRepoNotificationsForAuthenticatedUserQueryProps
	extends ActivityListRepoNotificationsForAuthenticatedUserPathParams {
	queryParams: ActivityListRepoNotificationsForAuthenticatedUserQueryParams;
}

export function useActivityListRepoNotificationsForAuthenticatedUserQuery(
	props: UseActivityListRepoNotificationsForAuthenticatedUserQueryProps,
) {
	const { owner, repo, queryParams } = props;

	return useQuery([
		'activity/list-repo-notifications-for-authenticated-user',
		owner,
		repo,
		queryParams,
	]);
}