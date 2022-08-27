import { useQuery } from '@tanstack/react-query';

export interface ReposListCommitCommentsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ReposListCommitCommentsForRepoQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListCommitCommentsForRepoQueryProps
	extends ReposListCommitCommentsForRepoPathParams {
	queryParams: ReposListCommitCommentsForRepoQueryParams;
}

export function useReposListCommitCommentsForRepoQuery(
	props: UseReposListCommitCommentsForRepoQueryProps,
) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-commit-comments-for-repo', owner, repo, queryParams]);
}
