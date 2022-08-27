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
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
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
