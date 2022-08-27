/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface OrgsListFailedInvitationsPathParams {
	org: string;
}

export interface OrgsListFailedInvitationsQueryParams {
	per_page?: number;
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
