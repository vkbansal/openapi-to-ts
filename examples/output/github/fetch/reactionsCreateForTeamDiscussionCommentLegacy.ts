/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReactionsCreateForTeamDiscussionCommentLegacyPathParams {
	team_id: number;
	discussion_number: number;
	comment_number: number;
}

export interface ReactionsCreateForTeamDiscussionCommentLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsCreateForTeamDiscussionCommentLegacyPathParams {}

export async function reactionsCreateForTeamDiscussionCommentLegacy(
	props: ReactionsCreateForTeamDiscussionCommentLegacyProps,
) {
	const { team_id, discussion_number, comment_number, ...rest } = props;

	const response = await fetch(
		`/teams/${team_id}/discussions/${discussion_number}/comments/${comment_number}/reactions`,
		{
			method: 'POST',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}