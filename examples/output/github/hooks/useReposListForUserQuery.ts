/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposListForUserQueryPathParams {
	username: string;
}

export interface UseReposListForUserQueryQueryParams {
	/**
	 * @default "owner"
	 */
	type?: 'all' | 'member' | 'owner';
	/**
	 * @default "full_name"
	 */
	sort?: 'created' | 'full_name' | 'pushed' | 'updated';
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

export interface UseReposListForUserQueryProps extends UseReposListForUserQueryPathParams {
	queryParams: UseReposListForUserQueryQueryParams;
}

/**
 * Lists public repositories for the specified user. Note: For GitHub AE, this endpoint will list internal repositories for the specified user.
 */

export function useReposListForUserQuery(props: UseReposListForUserQueryProps) {
	const { username, queryParams } = props;

	return useQuery(['repos/list-for-user', username, queryParams]);
}
