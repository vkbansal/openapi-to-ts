import { useQuery } from '@tanstack/react-query';

export interface ActivityListPublicOrgEventsPathParams {
	org: string;
}

export interface ActivityListPublicOrgEventsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActivityListPublicOrgEventsQueryProps
	extends ActivityListPublicOrgEventsPathParams {
	queryParams: ActivityListPublicOrgEventsQueryParams;
}

export function useActivityListPublicOrgEventsQuery(
	props: UseActivityListPublicOrgEventsQueryProps,
) {
	const { org, queryParams } = props;

	return useQuery(['activity/list-public-org-events', org, queryParams]);
}
