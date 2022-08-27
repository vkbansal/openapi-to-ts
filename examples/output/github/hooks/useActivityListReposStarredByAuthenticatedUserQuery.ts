import { useQuery } from '@tanstack/react-query';

export interface ActivityListReposStarredByAuthenticatedUserQueryParams {
	/**
	 * @default "created"
	 */
	sort?: 'created' | 'updated';
	/**
	 * @default "desc"
	 */
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActivityListReposStarredByAuthenticatedUserQueryProps {
	queryParams: ActivityListReposStarredByAuthenticatedUserQueryParams;
}

export function useActivityListReposStarredByAuthenticatedUserQuery(
	props: UseActivityListReposStarredByAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['activity/list-repos-starred-by-authenticated-user', queryParams]);
}
