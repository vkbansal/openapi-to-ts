import { useQuery } from '@tanstack/react-query';

export interface PullsListReviewCommentsPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsListReviewCommentsQueryParams {
	/**
	 * @default "created"
	 */
	sort?: 'created' | 'updated';
	direction?: 'asc' | 'desc';
	since?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsePullsListReviewCommentsQueryProps extends PullsListReviewCommentsPathParams {
	queryParams: PullsListReviewCommentsQueryParams;
}

export function usePullsListReviewCommentsQuery(props: UsePullsListReviewCommentsQueryProps) {
	const { owner, repo, pull_number, queryParams } = props;

	return useQuery(['pulls/list-review-comments', owner, repo, pull_number, queryParams]);
}
