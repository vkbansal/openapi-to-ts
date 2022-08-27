import { useQuery } from '@tanstack/react-query';

export interface ActivityListNotificationsForAuthenticatedUserQueryParams {
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

export interface UseActivityListNotificationsForAuthenticatedUserQueryProps {
	queryParams: ActivityListNotificationsForAuthenticatedUserQueryParams;
}

export function useActivityListNotificationsForAuthenticatedUserQuery(
	props: UseActivityListNotificationsForAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['activity/list-notifications-for-authenticated-user', queryParams]);
}
