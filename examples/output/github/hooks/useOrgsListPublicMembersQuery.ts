import { useQuery } from '@tanstack/react-query';

export interface OrgsListPublicMembersPathParams {
	org: string;
}

export interface OrgsListPublicMembersQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseOrgsListPublicMembersQueryProps extends OrgsListPublicMembersPathParams {
	queryParams: OrgsListPublicMembersQueryParams;
}

export function useOrgsListPublicMembersQuery(props: UseOrgsListPublicMembersQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['orgs/list-public-members', org, queryParams]);
}
