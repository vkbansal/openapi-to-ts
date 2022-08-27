export interface ReactionsListForPullRequestReviewCommentQueryParams {
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

export interface ReactionsListForPullRequestReviewCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface ReactionsListForPullRequestReviewCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsListForPullRequestReviewCommentPathParams {
	queryParams: ReactionsListForPullRequestReviewCommentQueryParams;
}

export async function reactionsListForPullRequestReviewComment(
	props: ReactionsListForPullRequestReviewCommentProps,
) {
	const { owner, repo, comment_id, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/comments/${comment_id}/reactions`, {
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
