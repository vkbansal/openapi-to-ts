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

export function useOrgsListInvitationTeamsQuery(props: UseOrgsListInvitationTeamsQueryProps) {
	const { org, invitation_id, queryParams } = props;

	return useQuery(['orgs/list-invitation-teams', org, invitation_id, queryParams]);
}
