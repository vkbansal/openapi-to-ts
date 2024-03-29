/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseTeamsGetMembershipForUserLegacyQueryPathParams {
	team_id: number;
	username: string;
}

export interface UseTeamsGetMembershipForUserLegacyQueryProps
	extends UseTeamsGetMembershipForUserLegacyQueryPathParams {}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user) endpoint.
 *
 * Team members will include the members of child teams.
 *
 * To get a user's membership with a team, the team must be visible to the authenticated user.
 *
 * **Note:** The `role` for organization owners returns as `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/rest/reference/teams#create-a-team).
 * @deprecated
 */

export function useTeamsGetMembershipForUserLegacyQuery(
	props: UseTeamsGetMembershipForUserLegacyQueryProps,
) {
	const { team_id, username } = props;

	return useQuery(['teams/get-membership-for-user-legacy', team_id, username]);
}
