/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface TeamsAddMemberLegacyPathParams {
	team_id: number;
	username: string;
}

export interface TeamsAddMemberLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsAddMemberLegacyPathParams {}

/**
 * The "Add team member" endpoint (described below) is deprecated.
 *
 * We recommend using the [Add or update team membership for a user](https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.
 *
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.
 *
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 *
 * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 * @deprecated
 */
export async function teamsAddMemberLegacy(props: TeamsAddMemberLegacyProps) {
	const { team_id, username, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/teams/${team_id}/members/${username}`,
		method: 'PUT',
		...rest,
	});
}
