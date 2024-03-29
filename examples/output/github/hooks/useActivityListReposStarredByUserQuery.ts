/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseActivityListReposStarredByUserQueryPathParams {
	username: string;
}

export interface UseActivityListReposStarredByUserQueryQueryParams {
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
	extends UseActivityListReposStarredByUserQueryPathParams {
	queryParams: UseActivityListReposStarredByUserQueryQueryParams;
}

/**
 * Lists repositories a user has starred.
 *
 * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header:
 */

export function useActivityListReposStarredByUserQuery(
	props: UseActivityListReposStarredByUserQueryProps,
) {
	const { username, queryParams } = props;

	return useQuery(['activity/list-repos-starred-by-user', username, queryParams]);
}
