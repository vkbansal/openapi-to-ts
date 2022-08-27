import { useQuery } from '@tanstack/react-query';

export interface ActivityListReceivedEventsForUserPathParams {
	username: string;
}

export interface ActivityListReceivedEventsForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActivityListReceivedEventsForUserQueryProps
	extends ActivityListReceivedEventsForUserPathParams {
	queryParams: ActivityListReceivedEventsForUserQueryParams;
}

export function useActivityListReceivedEventsForUserQuery(
	props: UseActivityListReceivedEventsForUserQueryProps,
) {
	const { username, queryParams } = props;

	return useQuery(['activity/list-received-events-for-user', username, queryParams]);
}
