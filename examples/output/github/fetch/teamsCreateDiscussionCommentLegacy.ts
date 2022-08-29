/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface TeamsCreateDiscussionCommentLegacyPathParams {
	team_id: number;
	discussion_number: number;
}

export interface TeamsCreateDiscussionCommentLegacyRequestBody {
	/**
	 * The discussion comment's body text.
	 */
	body: string;
}

export interface TeamsCreateDiscussionCommentLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsCreateDiscussionCommentLegacyPathParams {
	body: TeamsCreateDiscussionCommentLegacyRequestBody;
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://docs.github.com/rest/reference/teams#create-a-discussion-comment) endpoint.
 *
 * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
 * @deprecated
 */
export async function teamsCreateDiscussionCommentLegacy(
	props: TeamsCreateDiscussionCommentLegacyProps,
) {
	const { team_id, discussion_number, ...rest } = props;

	return _fetcher<unknown, unknown, TeamsCreateDiscussionCommentLegacyRequestBody>({
		path: `/teams/${team_id}/discussions/${discussion_number}/comments`,
		method: 'POST',
		...rest,
	});
}
