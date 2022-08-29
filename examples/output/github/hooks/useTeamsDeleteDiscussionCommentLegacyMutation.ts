/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseTeamsDeleteDiscussionCommentLegacyMutationPathParams {
	team_id: number;
	discussion_number: number;
	comment_number: number;
}

export interface UseTeamsDeleteDiscussionCommentLegacyMutationProps
	extends UseTeamsDeleteDiscussionCommentLegacyMutationPathParams {}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://docs.github.com/rest/reference/teams#delete-a-discussion-comment) endpoint.
 *
 * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @deprecated
 */

export function useTeamsDeleteDiscussionCommentLegacyMutation(
	props: UseTeamsDeleteDiscussionCommentLegacyMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
