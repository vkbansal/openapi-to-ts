import { useQuery } from '@tanstack/react-query';

export interface GitGetCommitPathParams {
	owner: string;
	repo: string;
	commit_sha: string;
}

export interface UseGitGetCommitQueryProps extends GitGetCommitPathParams {}

export function useGitGetCommitQuery(props: UseGitGetCommitQueryProps) {
	const { owner, repo, commit_sha } = props;

	return useQuery(['git/get-commit', owner, repo, commit_sha]);
}
