import { useQuery } from '@tanstack/react-query';

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

export interface UseReactionsListForPullRequestReviewCommentQueryProps
	extends ReactionsListForPullRequestReviewCommentPathParams {
	queryParams: ReactionsListForPullRequestReviewCommentQueryParams;
}

export function useReactionsListForPullRequestReviewCommentQuery(
	props: UseReactionsListForPullRequestReviewCommentQueryProps,
) {
	const { owner, repo, comment_id, queryParams } = props;

	return useQuery([
		'reactions/list-for-pull-request-review-comment',
		owner,
		repo,
		comment_id,
		queryParams,
	]);
}
