/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface TeamsRemoveMembershipForUserLegacyPathParams {
	team_id: number;
	username: string;
}

export interface TeamsRemoveMembershipForUserLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsRemoveMembershipForUserLegacyPathParams {}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user) endpoint.
 *
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
 *
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 * @deprecated
 */
export async function teamsRemoveMembershipForUserLegacy(
	props: TeamsRemoveMembershipForUserLegacyProps,
) {
	const { team_id, username, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/teams/${team_id}/memberships/${username}`,
		method: 'DELETE',
		...rest,
	});
}
