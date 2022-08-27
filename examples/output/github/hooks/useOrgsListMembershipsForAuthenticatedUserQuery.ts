import { useQuery } from '@tanstack/react-query';

export interface OrgsListMembershipsForAuthenticatedUserQueryParams {
	state?: 'active' | 'pending';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseOrgsListMembershipsForAuthenticatedUserQueryProps {
	queryParams: OrgsListMembershipsForAuthenticatedUserQueryParams;
}

export function useOrgsListMembershipsForAuthenticatedUserQuery(
	props: UseOrgsListMembershipsForAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['orgs/list-memberships-for-authenticated-user', queryParams]);
}
