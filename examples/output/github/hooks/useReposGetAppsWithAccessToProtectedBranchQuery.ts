import { useQuery } from '@tanstack/react-query';

export interface ReposGetAppsWithAccessToProtectedBranchPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposGetAppsWithAccessToProtectedBranchQueryProps
	extends ReposGetAppsWithAccessToProtectedBranchPathParams {}

export function useReposGetAppsWithAccessToProtectedBranchQuery(
	props: UseReposGetAppsWithAccessToProtectedBranchQueryProps,
) {
	const { owner, repo, branch } = props;

	return useQuery(['repos/get-apps-with-access-to-protected-branch', owner, repo, branch]);
}
