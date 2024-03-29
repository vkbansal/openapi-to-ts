/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseActivityListNotificationsForAuthenticatedUserQueryQueryParams {
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
	queryParams: UseActivityListNotificationsForAuthenticatedUserQueryQueryParams;
}

/**
 * List all notifications for the current user, sorted by most recently updated.
 */

export function useActivityListNotificationsForAuthenticatedUserQuery(
	props: UseActivityListNotificationsForAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['activity/list-notifications-for-authenticated-user', queryParams]);
}
