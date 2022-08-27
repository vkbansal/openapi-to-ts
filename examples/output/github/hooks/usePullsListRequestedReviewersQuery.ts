/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface PullsListRequestedReviewersPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsListRequestedReviewersQueryParams {
	per_page?: number;
	page?: number;
}

export interface UsePullsListRequestedReviewersQueryProps
	extends PullsListRequestedReviewersPathParams {
	queryParams: PullsListRequestedReviewersQueryParams;
}

export function usePullsListRequestedReviewersQuery(
	props: UsePullsListRequestedReviewersQueryProps,
) {
	const { owner, repo, pull_number, queryParams } = props;

	return useQuery(['pulls/list-requested-reviewers', owner, repo, pull_number, queryParams]);
}