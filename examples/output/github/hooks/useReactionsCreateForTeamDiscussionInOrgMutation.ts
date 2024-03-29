/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseReactionsCreateForTeamDiscussionInOrgMutationPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
}

export interface UseReactionsCreateForTeamDiscussionInOrgMutationRequestBody {
	/**
	 * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion.
	 */
	content: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
}

export interface UseReactionsCreateForTeamDiscussionInOrgMutationProps
	extends UseReactionsCreateForTeamDiscussionInOrgMutationPathParams {
	body: UseReactionsCreateForTeamDiscussionInOrgMutationRequestBody;
}

/**
 * Create a reaction to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
 */

export function useReactionsCreateForTeamDiscussionInOrgMutation(
	props: UseReactionsCreateForTeamDiscussionInOrgMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
