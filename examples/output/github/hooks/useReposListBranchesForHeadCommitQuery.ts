import { useQuery } from '@tanstack/react-query';

export interface ReposListBranchesForHeadCommitPathParams {
	owner: string;
	repo: string;
	commit_sha: string;
}

export interface UseReposListBranchesForHeadCommitQueryProps
	extends ReposListBranchesForHeadCommitPathParams {}

export function useReposListBranchesForHeadCommitQuery(
	props: UseReposListBranchesForHeadCommitQueryProps,
) {
	const { owner, repo, commit_sha } = props;

	return useQuery(['repos/list-branches-for-head-commit', owner, repo, commit_sha]);
}
