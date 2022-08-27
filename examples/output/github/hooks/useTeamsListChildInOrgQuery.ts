import { useQuery } from '@tanstack/react-query';

export interface TeamsListChildInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListChildInOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseTeamsListChildInOrgQueryProps extends TeamsListChildInOrgPathParams {
	queryParams: TeamsListChildInOrgQueryParams;
}

export function useTeamsListChildInOrgQuery(props: UseTeamsListChildInOrgQueryProps) {
	const { org, team_slug, queryParams } = props;

	return useQuery(['teams/list-child-in-org', org, team_slug, queryParams]);
}
