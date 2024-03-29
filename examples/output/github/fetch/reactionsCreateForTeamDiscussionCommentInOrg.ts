/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReactionsCreateForTeamDiscussionCommentInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
	comment_number: number;
}

export interface ReactionsCreateForTeamDiscussionCommentInOrgRequestBody {
	/**
	 * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion comment.
	 */
	content: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
}

export interface ReactionsCreateForTeamDiscussionCommentInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsCreateForTeamDiscussionCommentInOrgPathParams {
	body: ReactionsCreateForTeamDiscussionCommentInOrgRequestBody;
}

/**
 * Create a reaction to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion comment.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
 */
export async function reactionsCreateForTeamDiscussionCommentInOrg(
	props: ReactionsCreateForTeamDiscussionCommentInOrgProps,
) {
	const { org, team_slug, discussion_number, comment_number, ...rest } = props;

	return _fetcher<unknown, unknown, ReactionsCreateForTeamDiscussionCommentInOrgRequestBody>({
		path: `/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}/comments/${comment_number}/reactions`,
		method: 'POST',
		...rest,
	});
}
