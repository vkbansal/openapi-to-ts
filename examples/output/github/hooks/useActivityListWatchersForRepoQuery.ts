import { useQuery } from '@tanstack/react-query';

export interface ActivityListWatchersForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActivityListWatchersForRepoQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActivityListWatchersForRepoQueryProps
	extends ActivityListWatchersForRepoPathParams {
	queryParams: ActivityListWatchersForRepoQueryParams;
}

export function useActivityListWatchersForRepoQuery(
	props: UseActivityListWatchersForRepoQueryProps,
) {
	const { owner, repo, queryParams } = props;

	return useQuery(['activity/list-watchers-for-repo', owner, repo, queryParams]);
}
