/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UsePullsListReviewsQueryPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface UsePullsListReviewsQueryQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsePullsListReviewsQueryProps extends UsePullsListReviewsQueryPathParams {
	queryParams: UsePullsListReviewsQueryQueryParams;
}

/**
 * The list of reviews returns in chronological order.
 */

export function usePullsListReviewsQuery(props: UsePullsListReviewsQueryProps) {
	const { owner, repo, pull_number, queryParams } = props;

	return useQuery(['pulls/list-reviews', owner, repo, pull_number, queryParams]);
}
