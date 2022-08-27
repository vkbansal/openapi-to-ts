import { useQuery } from '@tanstack/react-query';

export interface TeamsListPendingInvitationsLegacyPathParams {
	team_id: number;
}

export interface TeamsListPendingInvitationsLegacyQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
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
