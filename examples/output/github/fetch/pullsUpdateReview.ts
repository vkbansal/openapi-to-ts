/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface PullsUpdateReviewPathParams {
	owner: string;
	repo: string;
	pull_number: number;
	review_id: number;
}

export interface PullsUpdateReviewRequestBody {
	/**
	 * The body text of the pull request review.
	 */
	body: string;
}

export interface PullsUpdateReviewProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsUpdateReviewPathParams {
	body: PullsUpdateReviewRequestBody;
}

/**
 * Update the review summary comment with new text.
 */
export async function pullsUpdateReview(props: PullsUpdateReviewProps) {
	const { owner, repo, pull_number, review_id, ...rest } = props;

	return _fetcher<unknown, unknown, PullsUpdateReviewRequestBody>({
		path: `/repos/${owner}/${repo}/pulls/${pull_number}/reviews/${review_id}`,
		method: 'PUT',
		...rest,
	});
}
