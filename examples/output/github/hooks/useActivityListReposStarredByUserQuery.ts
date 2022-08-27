import { useQuery } from '@tanstack/react-query';

export interface ActivityListReposStarredByUserPathParams {
	username: string;
}

export interface ActivityListReposStarredByUserQueryParams {
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

export interface UseActivityListReposStarredByUserQueryProps
	extends ActivityListReposStarredByUserPathParams {
	queryParams: ActivityListReposStarredByUserQueryParams;
}

export function useActivityListReposStarredByUserQuery(
	props: UseActivityListReposStarredByUserQueryProps,
) {
	const { username, queryParams } = props;

	return useQuery(['activity/list-repos-starred-by-user', username, queryParams]);
}
