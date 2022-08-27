import { useQuery } from '@tanstack/react-query';

export interface OrgsListFailedInvitationsPathParams {
	org: string;
}

export interface OrgsListFailedInvitationsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseOrgsListFailedInvitationsQueryProps
	extends OrgsListFailedInvitationsPathParams {
	queryParams: OrgsListFailedInvitationsQueryParams;
}

export function useOrgsListFailedInvitationsQuery(props: UseOrgsListFailedInvitationsQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['orgs/list-failed-invitations', org, queryParams]);
}
