import { useQuery } from '@tanstack/react-query';

export interface ActivityListReceivedPublicEventsForUserPathParams {
	username: string;
}

export interface ActivityListReceivedPublicEventsForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActivityListReceivedPublicEventsForUserQueryProps
	extends ActivityListReceivedPublicEventsForUserPathParams {
	queryParams: ActivityListReceivedPublicEventsForUserQueryParams;
}

export function useActivityListReceivedPublicEventsForUserQuery(
	props: UseActivityListReceivedPublicEventsForUserQueryProps,
) {
	const { username, queryParams } = props;

	return useQuery(['activity/list-received-public-events-for-user', username, queryParams]);
}
