/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReactionsCreateForTeamDiscussionLegacyPathParams {
	team_id: number;
	discussion_number: number;
}

export interface ReactionsCreateForTeamDiscussionLegacyRequestBody {
	/**
	 * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion.
	 */
	content: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
}

export interface ReactionsCreateForTeamDiscussionLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsCreateForTeamDiscussionLegacyPathParams {
	body: ReactionsCreateForTeamDiscussionLegacyRequestBody;
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.
 *
 * Create a reaction to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion.
 * @deprecated
 */
export async function reactionsCreateForTeamDiscussionLegacy(
	props: ReactionsCreateForTeamDiscussionLegacyProps,
) {
	const { team_id, discussion_number, ...rest } = props;

	return _fetcher<unknown, unknown, ReactionsCreateForTeamDiscussionLegacyRequestBody>({
		path: `/teams/${team_id}/discussions/${discussion_number}/reactions`,
		method: 'POST',
		...rest,
	});
}
