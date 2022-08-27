import { useQuery } from '@tanstack/react-query';

export interface ActivityListEventsForAuthenticatedUserPathParams {
	username: string;
}

export interface ActivityListEventsForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActivityListEventsForAuthenticatedUserQueryProps
	extends ActivityListEventsForAuthenticatedUserPathParams {
	queryParams: ActivityListEventsForAuthenticatedUserQueryParams;
}

export function useActivityListEventsForAuthenticatedUserQuery(
	props: UseActivityListEventsForAuthenticatedUserQueryProps,
) {
	const { username, queryParams } = props;

	return useQuery(['activity/list-events-for-authenticated-user', username, queryParams]);
}
