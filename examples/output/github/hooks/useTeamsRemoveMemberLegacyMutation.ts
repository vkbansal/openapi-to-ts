/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseTeamsRemoveMemberLegacyMutationPathParams {
	team_id: number;
	username: string;
}

export interface UseTeamsRemoveMemberLegacyMutationProps
	extends UseTeamsRemoveMemberLegacyMutationPathParams {}

/**
 * The "Remove team member" endpoint (described below) is deprecated.
 *
 * We recommend using the [Remove team membership for a user](https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.
 *
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.
 *
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 * @deprecated
 */

export function useTeamsRemoveMemberLegacyMutation(props: UseTeamsRemoveMemberLegacyMutationProps) {
	return useMutation(() => Promise.resolve());
}
