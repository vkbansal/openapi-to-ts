/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface TeamsRemoveMembershipForUserInOrgPathParams {
	org: string;
	team_slug: string;
	username: string;
}

export interface TeamsRemoveMembershipForUserInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsRemoveMembershipForUserInOrgPathParams {}

/**
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
 *
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.
 */
export async function teamsRemoveMembershipForUserInOrg(
	props: TeamsRemoveMembershipForUserInOrgProps,
) {
	const { org, team_slug, username, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/orgs/${org}/teams/${team_slug}/memberships/${username}`,
		method: 'DELETE',
		...rest,
	});
}
