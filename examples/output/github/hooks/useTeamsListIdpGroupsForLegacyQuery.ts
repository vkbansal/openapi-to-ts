/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseTeamsListIdpGroupsForLegacyQueryPathParams {
	team_id: number;
}

export interface UseTeamsListIdpGroupsForLegacyQueryProps
	extends UseTeamsListIdpGroupsForLegacyQueryPathParams {}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List IdP groups for a team`](https://docs.github.com/rest/reference/teams#list-idp-groups-for-a-team) endpoint.
 *
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * List IdP groups connected to a team on GitHub.
 * @deprecated
 */

export function useTeamsListIdpGroupsForLegacyQuery(
	props: UseTeamsListIdpGroupsForLegacyQueryProps,
) {
	const { team_id } = props;

	return useQuery(['teams/list-idp-groups-for-legacy', team_id]);
}
