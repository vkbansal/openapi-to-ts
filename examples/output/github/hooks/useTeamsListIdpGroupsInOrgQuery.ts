/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseTeamsListIdpGroupsInOrgQueryPathParams {
	org: string;
	team_slug: string;
}

export interface UseTeamsListIdpGroupsInOrgQueryProps
	extends UseTeamsListIdpGroupsInOrgQueryPathParams {}

/**
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * List IdP groups connected to a team on GitHub.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/team-sync/group-mappings`.
 */

export function useTeamsListIdpGroupsInOrgQuery(props: UseTeamsListIdpGroupsInOrgQueryProps) {
	const { org, team_slug } = props;

	return useQuery(['teams/list-idp-groups-in-org', org, team_slug]);
}
