import { useQuery } from '@tanstack/react-query';

export interface TeamsListPendingInvitationsInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListPendingInvitationsInOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseTeamsListPendingInvitationsInOrgQueryProps
	extends TeamsListPendingInvitationsInOrgPathParams {
	queryParams: TeamsListPendingInvitationsInOrgQueryParams;
}

export function useTeamsListPendingInvitationsInOrgQuery(
	props: UseTeamsListPendingInvitationsInOrgQueryProps,
) {
	const { org, team_slug, queryParams } = props;

	return useQuery(['teams/list-pending-invitations-in-org', org, team_slug, queryParams]);
}
