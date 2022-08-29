/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface ReposListBranchesPathParams {
	owner: string;
	repo: string;
}

export interface ReposListBranchesQueryParams {
	protected?: boolean;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListBranchesQueryProps extends ReposListBranchesPathParams {
	queryParams: ReposListBranchesQueryParams;
}

/**
 *
 */

export function useReposListBranchesQuery(props: UseReposListBranchesQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-branches', owner, repo, queryParams]);
}
