export interface ReactionsDeleteForTeamDiscussionCommentPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
	comment_number: number;
	reaction_id: number;
}

export interface ReactionsDeleteForTeamDiscussionCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsDeleteForTeamDiscussionCommentPathParams {}

export async function reactionsDeleteForTeamDiscussionComment(
	props: ReactionsDeleteForTeamDiscussionCommentProps,
) {
	const { org, team_slug, discussion_number, comment_number, reaction_id, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}/comments/${comment_number}/reactions/${reaction_id}`,
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
