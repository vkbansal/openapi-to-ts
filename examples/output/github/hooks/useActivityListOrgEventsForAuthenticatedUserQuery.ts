import { useQuery } from '@tanstack/react-query';

export interface ActivityListOrgEventsForAuthenticatedUserPathParams {
	username: string;
	org: string;
}

export interface ActivityListOrgEventsForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActivityListOrgEventsForAuthenticatedUserQueryProps
	extends ActivityListOrgEventsForAuthenticatedUserPathParams {
	queryParams: ActivityListOrgEventsForAuthenticatedUserQueryParams;
}

export function useActivityListOrgEventsForAuthenticatedUserQuery(
	props: UseActivityListOrgEventsForAuthenticatedUserQueryProps,
) {
	const { username, org, queryParams } = props;

	return useQuery(['activity/list-org-events-for-authenticated-user', username, org, queryParams]);
}
