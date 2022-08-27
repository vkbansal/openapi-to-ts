/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface TeamsListMembersLegacyPathParams {
	team_id: number;
}

export interface TeamsListMembersLegacyQueryParams {
	role?: 'all' | 'maintainer' | 'member';
	per_page?: number;
	page?: number;
}

export interface UseTeamsListMembersLegacyQueryProps extends TeamsListMembersLegacyPathParams {
	queryParams: TeamsListMembersLegacyQueryParams;
}

export function useTeamsListMembersLegacyQuery(props: UseTeamsListMembersLegacyQueryProps) {
	const { team_id, queryParams } = props;

	return useQuery(['teams/list-members-legacy', team_id, queryParams]);
}