export interface PullsUpdateReviewCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface PullsUpdateReviewCommentRequestBody {
	/**
	 * The text of the reply to the review comment.
	 */
	body: string;
}

export interface PullsUpdateReviewCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsUpdateReviewCommentPathParams {
	body: PullsUpdateReviewCommentRequestBody;
}

export async function pullsUpdateReviewComment(props: PullsUpdateReviewCommentProps) {
	const { owner, repo, comment_id, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/comments/${comment_id}`, {
		method: 'PATCH',
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
