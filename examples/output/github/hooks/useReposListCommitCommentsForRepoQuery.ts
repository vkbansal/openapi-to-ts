/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ReposListCommitCommentsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ReposListCommitCommentsForRepoQueryParams {
	per_page?: number;
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