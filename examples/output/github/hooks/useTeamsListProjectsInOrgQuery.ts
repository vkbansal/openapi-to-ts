import { useQuery } from '@tanstack/react-query';

export interface TeamsListProjectsInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListProjectsInOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseTeamsListProjectsInOrgQueryProps extends TeamsListProjectsInOrgPathParams {
	queryParams: TeamsListProjectsInOrgQueryParams;
}

export function useTeamsListProjectsInOrgQuery(props: UseTeamsListProjectsInOrgQueryProps) {
	const { org, team_slug, queryParams } = props;

	return useQuery(['teams/list-projects-in-org', org, team_slug, queryParams]);
}
