/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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

/**
 * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
 */

export function useOrgsListPendingInvitationsQuery(props: UseOrgsListPendingInvitationsQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['orgs/list-pending-invitations', org, queryParams]);
}
