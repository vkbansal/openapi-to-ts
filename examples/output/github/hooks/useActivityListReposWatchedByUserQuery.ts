import { useQuery } from '@tanstack/react-query';

export interface ActivityListReposWatchedByUserPathParams {
	username: string;
}

export interface ActivityListReposWatchedByUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActivityListReposWatchedByUserQueryProps
	extends ActivityListReposWatchedByUserPathParams {
	queryParams: ActivityListReposWatchedByUserQueryParams;
}

export function useActivityListReposWatchedByUserQuery(
	props: UseActivityListReposWatchedByUserQueryProps,
) {
	const { username, queryParams } = props;

	return useQuery(['activity/list-repos-watched-by-user', username, queryParams]);
}
