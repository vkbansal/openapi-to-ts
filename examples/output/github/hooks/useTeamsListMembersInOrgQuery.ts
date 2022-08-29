/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface TeamsListMembersInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListMembersInOrgQueryParams {
	/**
	 * @default "all"
	 */
	role?: 'all' | 'maintainer' | 'member';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseTeamsListMembersInOrgQueryProps extends TeamsListMembersInOrgPathParams {
	queryParams: TeamsListMembersInOrgQueryParams;
}

/**
 * Team members will include the members of child teams.
 *
 * To list members in a team, the team must be visible to the authenticated user.
 */

export function useTeamsListMembersInOrgQuery(props: UseTeamsListMembersInOrgQueryProps) {
	const { org, team_slug, queryParams } = props;

	return useQuery(['teams/list-members-in-org', org, team_slug, queryParams]);
}
