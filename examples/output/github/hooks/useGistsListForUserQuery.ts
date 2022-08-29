/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseGistsListForUserQueryPathParams {
	username: string;
}

export interface UseGistsListForUserQueryQueryParams {
	since?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseGistsListForUserQueryProps extends UseGistsListForUserQueryPathParams {
	queryParams: UseGistsListForUserQueryQueryParams;
}

/**
 * Lists public gists for the specified user:
 */

export function useGistsListForUserQuery(props: UseGistsListForUserQueryProps) {
	const { username, queryParams } = props;

	return useQuery(['gists/list-for-user', username, queryParams]);
}
