import { useQuery } from '@tanstack/react-query';

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

export interface UseReposListForOrgQueryProps extends ReposListForOrgPathParams {
	queryParams: ReposListForOrgQueryParams;
}

export function useReposListForOrgQuery(props: UseReposListForOrgQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['repos/list-for-org', org, queryParams]);
}
