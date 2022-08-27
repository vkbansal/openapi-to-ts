import { useQuery } from '@tanstack/react-query';

export interface TeamsListIdpGroupsForLegacyPathParams {
	team_id: number;
}

export interface UseTeamsListIdpGroupsForLegacyQueryProps
	extends TeamsListIdpGroupsForLegacyPathParams {}

export function useTeamsListIdpGroupsForLegacyQuery(
	props: UseTeamsListIdpGroupsForLegacyQueryProps,
) {
	const { team_id } = props;

	return useQuery(['teams/list-idp-groups-for-legacy', team_id]);
}
