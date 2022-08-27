import { useQuery } from '@tanstack/react-query';

export interface TeamsListIdpGroupsInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface UseTeamsListIdpGroupsInOrgQueryProps extends TeamsListIdpGroupsInOrgPathParams {}

export function useTeamsListIdpGroupsInOrgQuery(props: UseTeamsListIdpGroupsInOrgQueryProps) {
	const { org, team_slug } = props;

	return useQuery(['teams/list-idp-groups-in-org', org, team_slug]);
}
