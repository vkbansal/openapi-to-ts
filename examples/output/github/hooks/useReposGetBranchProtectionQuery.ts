import { useQuery } from '@tanstack/react-query';

export interface ReposGetBranchProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposGetBranchProtectionQueryProps extends ReposGetBranchProtectionPathParams {}

export function useReposGetBranchProtectionQuery(props: UseReposGetBranchProtectionQueryProps) {
	const { owner, repo, branch } = props;

	return useQuery(['repos/get-branch-protection', owner, repo, branch]);
}
