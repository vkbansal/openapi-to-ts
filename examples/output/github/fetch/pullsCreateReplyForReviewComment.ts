export interface PullsCreateReplyForReviewCommentPathParams {
	owner: string;
	repo: string;
	pull_number: number;
	comment_id: number;
}

export interface PullsCreateReplyForReviewCommentRequestBody {
	/**
	 * The text of the review comment.
	 */
	body: string;
}

export interface PullsCreateReplyForReviewCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsCreateReplyForReviewCommentPathParams {
	body: PullsCreateReplyForReviewCommentRequestBody;
}

export async function pullsCreateReplyForReviewComment(
	props: PullsCreateReplyForReviewCommentProps,
) {
	const { owner, repo, pull_number, comment_id, body, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/pulls/${pull_number}/comments/${comment_id}/replies`,
		{
			method: 'POST',
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
