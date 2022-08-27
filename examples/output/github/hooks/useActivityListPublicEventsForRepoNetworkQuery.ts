import { useQuery } from '@tanstack/react-query';

export interface ActivityListPublicEventsForRepoNetworkPathParams {
	owner: string;
	repo: string;
}

export interface ActivityListPublicEventsForRepoNetworkQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActivityListPublicEventsForRepoNetworkQueryProps
	extends ActivityListPublicEventsForRepoNetworkPathParams {
	queryParams: ActivityListPublicEventsForRepoNetworkQueryParams;
}

export function useActivityListPublicEventsForRepoNetworkQuery(
	props: UseActivityListPublicEventsForRepoNetworkQueryProps,
) {
	const { owner, repo, queryParams } = props;

	return useQuery(['activity/list-public-events-for-repo-network', owner, repo, queryParams]);
}
