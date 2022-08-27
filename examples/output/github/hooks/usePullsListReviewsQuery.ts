/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface PullsListReviewsPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsListReviewsQueryParams {
	per_page?: number;
	page?: number;
}

export interface UsePullsListReviewsQueryProps extends PullsListReviewsPathParams {
	queryParams: PullsListReviewsQueryParams;
}

export function usePullsListReviewsQuery(props: UsePullsListReviewsQueryProps) {
	const { owner, repo, pull_number, queryParams } = props;

	return useQuery(['pulls/list-reviews', owner, repo, pull_number, queryParams]);
}
