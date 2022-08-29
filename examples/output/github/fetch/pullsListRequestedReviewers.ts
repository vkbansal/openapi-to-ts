/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface PullsListRequestedReviewersPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsListRequestedReviewersQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface PullsListRequestedReviewersProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsListRequestedReviewersPathParams {
	queryParams: PullsListRequestedReviewersQueryParams;
	paramsSerializer?: (params: PullsListRequestedReviewersQueryParams) => string;
}

/**
 *
 */
export async function pullsListRequestedReviewers(props: PullsListRequestedReviewersProps) {
	const { owner, repo, pull_number, ...rest } = props;

	return _fetcher<unknown, PullsListRequestedReviewersQueryParams, unknown>({
		path: `/repos/${owner}/${repo}/pulls/${pull_number}/requested_reviewers`,
		method: 'GET',
		...rest,
	});
}
