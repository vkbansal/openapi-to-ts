export interface PullsGetReviewCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface PullsGetReviewCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsGetReviewCommentPathParams {}

export async function pullsGetReviewComment(props: PullsGetReviewCommentProps) {
	const { owner, repo, comment_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/comments/${comment_id}`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
