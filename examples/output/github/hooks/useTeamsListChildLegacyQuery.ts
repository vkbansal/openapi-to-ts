/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface TeamsListChildLegacyPathParams {
	team_id: number;
}

export interface TeamsListChildLegacyQueryParams {
	per_page?: number;
	page?: number;
}

export interface UseTeamsListChildLegacyQueryProps extends TeamsListChildLegacyPathParams {
	queryParams: TeamsListChildLegacyQueryParams;
}

export function useTeamsListChildLegacyQuery(props: UseTeamsListChildLegacyQueryProps) {
	const { team_id, queryParams } = props;

	return useQuery(['teams/list-child-legacy', team_id, queryParams]);
}