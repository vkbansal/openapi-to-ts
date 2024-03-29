/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface PullsGetReviewCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface PullsGetReviewCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsGetReviewCommentPathParams {}

/**
 * Provides details for a review comment.
 */
export async function pullsGetReviewComment(props: PullsGetReviewCommentProps) {
	const { owner, repo, comment_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/pulls/comments/${comment_id}`,
		method: 'GET',
		...rest,
	});
}
