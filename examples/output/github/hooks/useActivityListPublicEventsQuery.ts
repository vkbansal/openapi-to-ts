import { useQuery } from '@tanstack/react-query';

export interface ActivityListPublicEventsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActivityListPublicEventsQueryProps {
	queryParams: ActivityListPublicEventsQueryParams;
}

export function useActivityListPublicEventsQuery(props: UseActivityListPublicEventsQueryProps) {
	const { queryParams } = props;

	return useQuery(['activity/list-public-events', queryParams]);
}
