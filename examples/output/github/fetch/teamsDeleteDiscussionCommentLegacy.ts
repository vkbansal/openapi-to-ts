export interface TeamsDeleteDiscussionCommentLegacyPathParams {
	team_id: number;
	discussion_number: number;
	comment_number: number;
}

export interface TeamsDeleteDiscussionCommentLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsDeleteDiscussionCommentLegacyPathParams {}

export async function teamsDeleteDiscussionCommentLegacy(
	props: TeamsDeleteDiscussionCommentLegacyProps,
) {
	const { team_id, discussion_number, comment_number, ...rest } = props;

	const response = await fetch(
		`/teams/${team_id}/discussions/${discussion_number}/comments/${comment_number}`,
		{
			method: 'DELETE',
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
