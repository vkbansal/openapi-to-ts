export interface TeamsUpdateDiscussionCommentInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
	comment_number: number;
}

export interface TeamsUpdateDiscussionCommentInOrgRequestBody {
	/**
	 * The discussion comment's body text.
	 */
	body: string;
}

export interface TeamsUpdateDiscussionCommentInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsUpdateDiscussionCommentInOrgPathParams {
	body: TeamsUpdateDiscussionCommentInOrgRequestBody;
}

export async function teamsUpdateDiscussionCommentInOrg(
	props: TeamsUpdateDiscussionCommentInOrgProps,
) {
	const { org, team_slug, discussion_number, comment_number, body, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}/comments/${comment_number}`,
		{
			method: 'PATCH',
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
