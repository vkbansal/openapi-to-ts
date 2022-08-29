/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposListTeamsQueryPathParams {
	owner: string;
	repo: string;
}

export interface UseReposListTeamsQueryQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListTeamsQueryProps extends UseReposListTeamsQueryPathParams {
	queryParams: UseReposListTeamsQueryQueryParams;
}

/**
 *
 */

export function useReposListTeamsQuery(props: UseReposListTeamsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-teams', owner, repo, queryParams]);
}
