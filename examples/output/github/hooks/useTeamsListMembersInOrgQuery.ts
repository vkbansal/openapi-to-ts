/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface TeamsListMembersInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListMembersInOrgQueryParams {
	role?: 'all' | 'maintainer' | 'member';
	per_page?: number;
	page?: number;
}

export interface UseTeamsListMembersInOrgQueryProps extends TeamsListMembersInOrgPathParams {
	queryParams: TeamsListMembersInOrgQueryParams;
}

export function useTeamsListMembersInOrgQuery(props: UseTeamsListMembersInOrgQueryProps) {
	const { org, team_slug, queryParams } = props;

	return useQuery(['teams/list-members-in-org', org, team_slug, queryParams]);
}