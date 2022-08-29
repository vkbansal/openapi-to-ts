/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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

export interface ReposListBranchesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListBranchesPathParams {
	queryParams: ReposListBranchesQueryParams;
	paramsSerializer?: (params: ReposListBranchesQueryParams) => string;
}

/**
 *
 */
export async function reposListBranches(props: ReposListBranchesProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, ReposListBranchesQueryParams, unknown>({
		path: `/repos/${owner}/${repo}/branches`,
		method: 'GET',
		...rest,
	});
}
