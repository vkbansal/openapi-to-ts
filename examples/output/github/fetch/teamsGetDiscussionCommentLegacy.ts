export interface TeamsGetDiscussionCommentLegacyPathParams {
	team_id: number;
	discussion_number: number;
	comment_number: number;
}

export interface TeamsGetDiscussionCommentLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsGetDiscussionCommentLegacyPathParams {}

export async function teamsGetDiscussionCommentLegacy(props: TeamsGetDiscussionCommentLegacyProps) {
	const { team_id, discussion_number, comment_number, ...rest } = props;

	const response = await fetch(
		`/teams/${team_id}/discussions/${discussion_number}/comments/${comment_number}`,
		{
			method: 'GET',
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
