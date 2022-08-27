import { useQuery } from '@tanstack/react-query';

export interface TeamsListDiscussionsInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListDiscussionsInOrgQueryParams {
	/**
	 * @default "desc"
	 */
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
	pinned?: string;
}

export interface UseTeamsListDiscussionsInOrgQueryProps
	extends TeamsListDiscussionsInOrgPathParams {
	queryParams: TeamsListDiscussionsInOrgQueryParams;
}

export function useTeamsListDiscussionsInOrgQuery(props: UseTeamsListDiscussionsInOrgQueryProps) {
	const { org, team_slug, queryParams } = props;

	return useQuery(['teams/list-discussions-in-org', org, team_slug, queryParams]);
}
