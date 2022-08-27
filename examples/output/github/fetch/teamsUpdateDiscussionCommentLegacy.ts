export interface TeamsUpdateDiscussionCommentLegacyPathParams {
	team_id: number;
	discussion_number: number;
	comment_number: number;
}

export interface TeamsUpdateDiscussionCommentLegacyRequestBody {
	/**
	 * The discussion comment's body text.
	 */
	body: string;
}

export interface TeamsUpdateDiscussionCommentLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsUpdateDiscussionCommentLegacyPathParams {
	body: TeamsUpdateDiscussionCommentLegacyRequestBody;
}

export async function teamsUpdateDiscussionCommentLegacy(
	props: TeamsUpdateDiscussionCommentLegacyProps,
) {
	const { team_id, discussion_number, comment_number, body, ...rest } = props;

	const response = await fetch(
		`/teams/${team_id}/discussions/${discussion_number}/comments/${comment_number}`,
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
