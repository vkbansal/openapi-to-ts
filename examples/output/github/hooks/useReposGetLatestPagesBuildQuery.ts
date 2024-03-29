/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposGetLatestPagesBuildQueryPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetLatestPagesBuildQueryProps
	extends UseReposGetLatestPagesBuildQueryPathParams {}

/**
 *
 */

export function useReposGetLatestPagesBuildQuery(props: UseReposGetLatestPagesBuildQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get-latest-pages-build', owner, repo]);
}
