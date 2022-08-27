/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ReposListForOrgPathParams {
	org: string;
}

export interface ReposListForOrgQueryParams {
	type?: 'all' | 'forks' | 'internal' | 'member' | 'private' | 'public' | 'sources';
	sort?: 'created' | 'full_name' | 'pushed' | 'updated';
	direction?: 'asc' | 'desc';
	per_page?: number;
	page?: number;
}

export interface UseReposListForOrgQueryProps extends ReposListForOrgPathParams {
	queryParams: ReposListForOrgQueryParams;
}

export function useReposListForOrgQuery(props: UseReposListForOrgQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['repos/list-for-org', org, queryParams]);
}
