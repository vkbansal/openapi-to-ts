import { useQuery } from '@tanstack/react-query';

export interface TeamsListProjectsLegacyPathParams {
	team_id: number;
}

export interface TeamsListProjectsLegacyQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseTeamsListProjectsLegacyQueryProps extends TeamsListProjectsLegacyPathParams {
	queryParams: TeamsListProjectsLegacyQueryParams;
}

export function useTeamsListProjectsLegacyQuery(props: UseTeamsListProjectsLegacyQueryProps) {
	const { team_id, queryParams } = props;

	return useQuery(['teams/list-projects-legacy', team_id, queryParams]);
}
