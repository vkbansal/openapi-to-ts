import { useQuery } from '@tanstack/react-query';

export interface ReposGetBranchPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposGetBranchQueryProps extends ReposGetBranchPathParams {}

export function useReposGetBranchQuery(props: UseReposGetBranchQueryProps) {
	const { owner, repo, branch } = props;

	return useQuery(['repos/get-branch', owner, repo, branch]);
}
