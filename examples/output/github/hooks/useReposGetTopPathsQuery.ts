/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposGetTopPathsQueryPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetTopPathsQueryProps extends UseReposGetTopPathsQueryPathParams {}

/**
 * Get the top 10 popular contents over the last 14 days.
 */

export function useReposGetTopPathsQuery(props: UseReposGetTopPathsQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get-top-paths', owner, repo]);
}
