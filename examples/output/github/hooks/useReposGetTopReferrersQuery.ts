/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposGetTopReferrersQueryPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetTopReferrersQueryProps extends UseReposGetTopReferrersQueryPathParams {}

/**
 * Get the top 10 referrers over the last 14 days.
 */

export function useReposGetTopReferrersQuery(props: UseReposGetTopReferrersQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get-top-referrers', owner, repo]);
}
