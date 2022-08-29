/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface PullsSubmitReviewPathParams {
	owner: string;
	repo: string;
	pull_number: number;
	review_id: number;
}

export interface PullsSubmitReviewRequestBody {
	/**
	 * The body text of the pull request review
	 */
	body?: string;
	/**
	 * The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. When you leave this blank, the API returns _HTTP 422 (Unrecognizable entity)_ and sets the review action state to `PENDING`, which means you will need to re-submit the pull request review using a review action.
	 */
	event: 'APPROVE' | 'COMMENT' | 'REQUEST_CHANGES';
}

export interface PullsSubmitReviewProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsSubmitReviewPathParams {
	body: PullsSubmitReviewRequestBody;
}

/**
 *
 */
export async function pullsSubmitReview(props: PullsSubmitReviewProps) {
	const { owner, repo, pull_number, review_id, ...rest } = props;

	return _fetcher<unknown, unknown, PullsSubmitReviewRequestBody>({
		path: `/repos/${owner}/${repo}/pulls/${pull_number}/reviews/${review_id}/events`,
		method: 'POST',
		...rest,
	});
}
