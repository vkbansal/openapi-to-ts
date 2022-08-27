export interface ReactionsListForTeamDiscussionCommentLegacyQueryParams {
	content?: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReactionsListForTeamDiscussionCommentLegacyPathParams {
	team_id: number;
	discussion_number: number;
	comment_number: number;
}

export interface ReactionsListForTeamDiscussionCommentLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsListForTeamDiscussionCommentLegacyPathParams {
	queryParams: ReactionsListForTeamDiscussionCommentLegacyQueryParams;
}

export async function reactionsListForTeamDiscussionCommentLegacy(
	props: ReactionsListForTeamDiscussionCommentLegacyProps,
) {
	const { team_id, discussion_number, comment_number, queryParams, ...rest } = props;

	const response = await fetch(
		`/teams/${team_id}/discussions/${discussion_number}/comments/${comment_number}/reactions`,
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
