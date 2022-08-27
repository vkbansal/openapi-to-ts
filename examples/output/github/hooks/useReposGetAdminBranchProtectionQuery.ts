import { useQuery } from '@tanstack/react-query';

export interface ReposGetAdminBranchProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposGetAdminBranchProtectionQueryProps
	extends ReposGetAdminBranchProtectionPathParams {}

export function useReposGetAdminBranchProtectionQuery(
	props: UseReposGetAdminBranchProtectionQueryProps,
) {
	const { owner, repo, branch } = props;

	return useQuery(['repos/get-admin-branch-protection', owner, repo, branch]);
}
