/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface PullsDismissReviewPathParams {
	owner: string;
	repo: string;
	pull_number: number;
	review_id: number;
}

export interface PullsDismissReviewRequestBody {
	/**
	 * @example "\"APPROVE\""
	 */
	event?: string;
	/**
	 * The message for the pull request review dismissal
	 */
	message: string;
}

export interface PullsDismissReviewProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsDismissReviewPathParams {
	body: PullsDismissReviewRequestBody;
}

/**
 * **Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.
 */
export async function pullsDismissReview(props: PullsDismissReviewProps) {
	const { owner, repo, pull_number, review_id, ...rest } = props;

	return _fetcher<unknown, unknown, PullsDismissReviewRequestBody>({
		path: `/repos/${owner}/${repo}/pulls/${pull_number}/reviews/${review_id}/dismissals`,
		method: 'PUT',
		...rest,
	});
}
