export interface ReactionsCreateForPullRequestReviewCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface ReactionsCreateForPullRequestReviewCommentRequestBody {
	/**
	 * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the pull request review comment.
	 */
	content: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
}

export interface ReactionsCreateForPullRequestReviewCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsCreateForPullRequestReviewCommentPathParams {
	body: ReactionsCreateForPullRequestReviewCommentRequestBody;
}

export async function reactionsCreateForPullRequestReviewComment(
	props: ReactionsCreateForPullRequestReviewCommentProps,
) {
	const { owner, repo, comment_id, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/comments/${comment_id}/reactions`, {
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
