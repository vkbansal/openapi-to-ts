import { useQuery } from '@tanstack/react-query';

export interface PullsListCommentsForReviewPathParams {
	owner: string;
	repo: string;
	pull_number: number;
	review_id: number;
}

export interface PullsListCommentsForReviewQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsePullsListCommentsForReviewQueryProps
	extends PullsListCommentsForReviewPathParams {
	queryParams: PullsListCommentsForReviewQueryParams;
}

export function usePullsListCommentsForReviewQuery(props: UsePullsListCommentsForReviewQueryProps) {
	const { owner, repo, pull_number, review_id, queryParams } = props;

	return useQuery([
		'pulls/list-comments-for-review',
		owner,
		repo,
		pull_number,
		review_id,
		queryParams,
	]);
}
