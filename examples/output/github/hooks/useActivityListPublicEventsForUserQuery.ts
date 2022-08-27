import { useQuery } from '@tanstack/react-query';

export interface ActivityListPublicEventsForUserPathParams {
	username: string;
}

export interface ActivityListPublicEventsForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActivityListPublicEventsForUserQueryProps
	extends ActivityListPublicEventsForUserPathParams {
	queryParams: ActivityListPublicEventsForUserQueryParams;
}

export function useActivityListPublicEventsForUserQuery(
	props: UseActivityListPublicEventsForUserQueryProps,
) {
	const { username, queryParams } = props;

	return useQuery(['activity/list-public-events-for-user', username, queryParams]);
}
