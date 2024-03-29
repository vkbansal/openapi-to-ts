/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposGetBranchQueryPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposGetBranchQueryProps extends UseReposGetBranchQueryPathParams {}

/**
 *
 */

export function useReposGetBranchQuery(props: UseReposGetBranchQueryProps) {
	const { owner, repo, branch } = props;

	return useQuery(['repos/get-branch', owner, repo, branch]);
}
