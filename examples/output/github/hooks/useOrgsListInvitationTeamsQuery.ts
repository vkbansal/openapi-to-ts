/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface OrgsListInvitationTeamsPathParams {
	org: string;
	invitation_id: number;
}

export interface OrgsListInvitationTeamsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseOrgsListInvitationTeamsQueryProps extends OrgsListInvitationTeamsPathParams {
	queryParams: OrgsListInvitationTeamsQueryParams;
}

/**
 * List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.
 */

export function useOrgsListInvitationTeamsQuery(props: UseOrgsListInvitationTeamsQueryProps) {
	const { org, invitation_id, queryParams } = props;

	return useQuery(['orgs/list-invitation-teams', org, invitation_id, queryParams]);
}
