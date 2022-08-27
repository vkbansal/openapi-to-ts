import { useQuery } from '@tanstack/react-query';

export interface OrgsListPendingInvitationsPathParams {
	org: string;
}

export interface OrgsListPendingInvitationsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseOrgsListPendingInvitationsQueryProps
	extends OrgsListPendingInvitationsPathParams {
	queryParams: OrgsListPendingInvitationsQueryParams;
}

export function useOrgsListPendingInvitationsQuery(props: UseOrgsListPendingInvitationsQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['orgs/list-pending-invitations', org, queryParams]);
}
