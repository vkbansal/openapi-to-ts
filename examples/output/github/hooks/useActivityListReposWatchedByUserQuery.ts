/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseActivityListReposWatchedByUserQueryPathParams {
	username: string;
}

export interface UseActivityListReposWatchedByUserQueryQueryParams {
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
	extends UseActivityListReposWatchedByUserQueryPathParams {
	queryParams: UseActivityListReposWatchedByUserQueryQueryParams;
}

/**
 * Lists repositories a user is watching.
 */

export function useActivityListReposWatchedByUserQuery(
	props: UseActivityListReposWatchedByUserQueryProps,
) {
	const { username, queryParams } = props;

	return useQuery(['activity/list-repos-watched-by-user', username, queryParams]);
}
