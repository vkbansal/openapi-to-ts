/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface PullsDeleteReviewCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface PullsDeleteReviewCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsDeleteReviewCommentPathParams {}

export async function pullsDeleteReviewComment(props: PullsDeleteReviewCommentProps) {
	const { owner, repo, comment_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/comments/${comment_id}`, {
		method: 'DELETE',
		...rest,
	});

	const json = await response.json();

	return json;
}
