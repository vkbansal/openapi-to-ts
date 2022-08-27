import { useQuery } from '@tanstack/react-query';

export interface PullsListReviewsPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsListReviewsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsePullsListReviewsQueryProps extends PullsListReviewsPathParams {
	queryParams: PullsListReviewsQueryParams;
}

export function usePullsListReviewsQuery(props: UsePullsListReviewsQueryProps) {
	const { owner, repo, pull_number, queryParams } = props;

	return useQuery(['pulls/list-reviews', owner, repo, pull_number, queryParams]);
}
