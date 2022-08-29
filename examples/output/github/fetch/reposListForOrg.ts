/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposListForOrgPathParams {
	org: string;
}

export interface ReposListForOrgQueryParams {
	type?: 'all' | 'forks' | 'internal' | 'member' | 'private' | 'public' | 'sources';
	/**
	 * @default "created"
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

export interface ReposListForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListForOrgPathParams {
	queryParams: ReposListForOrgQueryParams;
	paramsSerializer?: (params: ReposListForOrgQueryParams) => string;
}

/**
 * Lists repositories for the specified organization.
 */
export async function reposListForOrg(props: ReposListForOrgProps) {
	const { org, ...rest } = props;

	return _fetcher<unknown, ReposListForOrgQueryParams, unknown>({
		path: `/orgs/${org}/repos`,
		method: 'GET',
		...rest,
	});
}
