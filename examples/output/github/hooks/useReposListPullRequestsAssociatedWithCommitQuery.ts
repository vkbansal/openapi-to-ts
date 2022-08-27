import { useQuery } from '@tanstack/react-query';

export interface ReposListPullRequestsAssociatedWithCommitPathParams {
	owner: string;
	repo: string;
	commit_sha: string;
}

export interface ReposListPullRequestsAssociatedWithCommitQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListPullRequestsAssociatedWithCommitQueryProps
	extends ReposListPullRequestsAssociatedWithCommitPathParams {
	queryParams: ReposListPullRequestsAssociatedWithCommitQueryParams;
}

export function useReposListPullRequestsAssociatedWithCommitQuery(
	props: UseReposListPullRequestsAssociatedWithCommitQueryProps,
) {
	const { owner, repo, commit_sha, queryParams } = props;

	return useQuery([
		'repos/list-pull-requests-associated-with-commit',
		owner,
		repo,
		commit_sha,
		queryParams,
	]);
}
