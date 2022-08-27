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

export async function reactionsCreateForTeamDiscussionCommentInOrg(
	props: ReactionsCreateForTeamDiscussionCommentInOrgProps,
) {
	const { org, team_slug, discussion_number, comment_number, body, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}/comments/${comment_number}/reactions`,
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
