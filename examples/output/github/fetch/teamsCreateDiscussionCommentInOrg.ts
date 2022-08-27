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
