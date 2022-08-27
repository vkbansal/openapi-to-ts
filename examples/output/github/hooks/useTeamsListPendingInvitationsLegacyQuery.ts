/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface TeamsListPendingInvitationsLegacyPathParams {
	team_id: number;
}

export interface TeamsListPendingInvitationsLegacyQueryParams {
	per_page?: number;
	page?: number;
}

export interface UseTeamsListPendingInvitationsLegacyQueryProps
	extends TeamsListPendingInvitationsLegacyPathParams {
	queryParams: TeamsListPendingInvitationsLegacyQueryParams;
}

export function useTeamsListPendingInvitationsLegacyQuery(
	props: UseTeamsListPendingInvitationsLegacyQueryProps,
) {
	const { team_id, queryParams } = props;

	return useQuery(['teams/list-pending-invitations-legacy', team_id, queryParams]);
}
