import { useQuery } from '@tanstack/react-query';

export interface ReposGetUsersWithAccessToProtectedBranchPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposGetUsersWithAccessToProtectedBranchQueryProps
	extends ReposGetUsersWithAccessToProtectedBranchPathParams {}

export function useReposGetUsersWithAccessToProtectedBranchQuery(
	props: UseReposGetUsersWithAccessToProtectedBranchQueryProps,
) {
	const { owner, repo, branch } = props;

	return useQuery(['repos/get-users-with-access-to-protected-branch', owner, repo, branch]);
}
