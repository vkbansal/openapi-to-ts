/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReactionsListForPullRequestReviewCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

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

export interface ReactionsListForPullRequestReviewCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsListForPullRequestReviewCommentPathParams {
	queryParams: ReactionsListForPullRequestReviewCommentQueryParams;
	paramsSerializer?: (params: ReactionsListForPullRequestReviewCommentQueryParams) => string;
}

/**
 * List the reactions to a [pull request review comment](https://docs.github.com/rest/reference/pulls#review-comments).
 */
export async function reactionsListForPullRequestReviewComment(
	props: ReactionsListForPullRequestReviewCommentProps,
) {
	const { owner, repo, comment_id, ...rest } = props;

	return _fetcher<unknown, ReactionsListForPullRequestReviewCommentQueryParams, unknown>({
		path: `/repos/${owner}/${repo}/pulls/comments/${comment_id}/reactions`,
		method: 'GET',
		...rest,
	});
}
