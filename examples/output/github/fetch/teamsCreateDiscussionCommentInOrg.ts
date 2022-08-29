/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface TeamsCreateDiscussionCommentInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
}

export interface TeamsCreateDiscussionCommentInOrgRequestBody {
	/**
	 * The discussion comment's body text.
	 */
	body: string;
}

export interface TeamsCreateDiscussionCommentInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsCreateDiscussionCommentInOrgPathParams {
	body: TeamsCreateDiscussionCommentInOrgRequestBody;
}

/**
 * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
 */
export async function teamsCreateDiscussionCommentInOrg(
	props: TeamsCreateDiscussionCommentInOrgProps,
) {
	const { org, team_slug, discussion_number, body, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}/comments`,
		{
			method: 'POST',
			body: JSON.stringify(body),
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
