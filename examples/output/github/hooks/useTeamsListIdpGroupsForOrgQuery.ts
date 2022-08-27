import { useQuery } from '@tanstack/react-query';

export interface TeamsListIdpGroupsForOrgPathParams {
	org: string;
}

export interface TeamsListIdpGroupsForOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	page?: string;
}

export interface UseTeamsListIdpGroupsForOrgQueryProps extends TeamsListIdpGroupsForOrgPathParams {
	queryParams: TeamsListIdpGroupsForOrgQueryParams;
}

export function useTeamsListIdpGroupsForOrgQuery(props: UseTeamsListIdpGroupsForOrgQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['teams/list-idp-groups-for-org', org, queryParams]);
}
