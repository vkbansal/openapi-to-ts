import { useQuery } from '@tanstack/react-query';

export interface ActivityListWatchedReposForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActivityListWatchedReposForAuthenticatedUserQueryProps {
	queryParams: ActivityListWatchedReposForAuthenticatedUserQueryParams;
}

export function useActivityListWatchedReposForAuthenticatedUserQuery(
	props: UseActivityListWatchedReposForAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['activity/list-watched-repos-for-authenticated-user', queryParams]);
}
