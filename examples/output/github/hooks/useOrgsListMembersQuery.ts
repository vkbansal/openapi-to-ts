import { useQuery } from '@tanstack/react-query';

export interface OrgsListMembersPathParams {
	org: string;
}

export interface OrgsListMembersQueryParams {
	/**
	 * @default "all"
	 */
	filter?: '2fa_disabled' | 'all';
	/**
	 * @default "all"
	 */
	role?: 'admin' | 'all' | 'member';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseOrgsListMembersQueryProps extends OrgsListMembersPathParams {
	queryParams: OrgsListMembersQueryParams;
}

export function useOrgsListMembersQuery(props: UseOrgsListMembersQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['orgs/list-members', org, queryParams]);
}
