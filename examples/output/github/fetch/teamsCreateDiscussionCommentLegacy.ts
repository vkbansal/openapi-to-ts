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

export async function teamsCreateDiscussionCommentLegacy(
	props: TeamsCreateDiscussionCommentLegacyProps,
) {
	const { team_id, discussion_number, body, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/discussions/${discussion_number}/comments`, {
		method: 'POST',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
