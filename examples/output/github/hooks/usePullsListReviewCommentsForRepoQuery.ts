/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface PullsListReviewCommentsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface PullsListReviewCommentsForRepoQueryParams {
	sort?: 'created' | 'created_at' | 'updated';
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

export interface UsePullsListReviewCommentsForRepoQueryProps
	extends PullsListReviewCommentsForRepoPathParams {
	queryParams: PullsListReviewCommentsForRepoQueryParams;
}

/**
 * Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.
 */

export function usePullsListReviewCommentsForRepoQuery(
	props: UsePullsListReviewCommentsForRepoQueryProps,
) {
	const { owner, repo, queryParams } = props;

	return useQuery(['pulls/list-review-comments-for-repo', owner, repo, queryParams]);
}
