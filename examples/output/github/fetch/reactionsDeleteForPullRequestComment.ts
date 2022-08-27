export interface ReactionsDeleteForPullRequestCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
	reaction_id: number;
}

export interface ReactionsDeleteForPullRequestCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsDeleteForPullRequestCommentPathParams {}

export async function reactionsDeleteForPullRequestComment(
	props: ReactionsDeleteForPullRequestCommentProps,
) {
	const { owner, repo, comment_id, reaction_id, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/pulls/comments/${comment_id}/reactions/${reaction_id}`,
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
