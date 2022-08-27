import { useQuery } from '@tanstack/react-query';

export interface ReposListCommentsForCommitPathParams {
	owner: string;
	repo: string;
	commit_sha: string;
}

export interface ReposListCommentsForCommitQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListCommentsForCommitQueryProps
	extends ReposListCommentsForCommitPathParams {
	queryParams: ReposListCommentsForCommitQueryParams;
}

export function useReposListCommentsForCommitQuery(props: UseReposListCommentsForCommitQueryProps) {
	const { owner, repo, commit_sha, queryParams } = props;

	return useQuery(['repos/list-comments-for-commit', owner, repo, commit_sha, queryParams]);
}
