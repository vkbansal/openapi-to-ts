export interface ReactionsCreateForTeamDiscussionCommentLegacyPathParams {
	team_id: number;
	discussion_number: number;
	comment_number: number;
}

export interface ReactionsCreateForTeamDiscussionCommentLegacyRequestBody {
	/**
	 * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion comment.
	 */
	content: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
}

export interface ReactionsCreateForTeamDiscussionCommentLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsCreateForTeamDiscussionCommentLegacyPathParams {
	body: ReactionsCreateForTeamDiscussionCommentLegacyRequestBody;
}

export async function reactionsCreateForTeamDiscussionCommentLegacy(
	props: ReactionsCreateForTeamDiscussionCommentLegacyProps,
) {
	const { team_id, discussion_number, comment_number, body, ...rest } = props;

	const response = await fetch(
		`/teams/${team_id}/discussions/${discussion_number}/comments/${comment_number}/reactions`,
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
