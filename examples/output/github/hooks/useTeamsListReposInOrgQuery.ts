import { useQuery } from '@tanstack/react-query';

export interface TeamsListReposInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListReposInOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseTeamsListReposInOrgQueryProps extends TeamsListReposInOrgPathParams {
	queryParams: TeamsListReposInOrgQueryParams;
}

export function useTeamsListReposInOrgQuery(props: UseTeamsListReposInOrgQueryProps) {
	const { org, team_slug, queryParams } = props;

	return useQuery(['teams/list-repos-in-org', org, team_slug, queryParams]);
}
