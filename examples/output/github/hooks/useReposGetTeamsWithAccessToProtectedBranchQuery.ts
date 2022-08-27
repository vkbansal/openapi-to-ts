import { useQuery } from '@tanstack/react-query';

export interface ReposGetTeamsWithAccessToProtectedBranchPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposGetTeamsWithAccessToProtectedBranchQueryProps
	extends ReposGetTeamsWithAccessToProtectedBranchPathParams {}

export function useReposGetTeamsWithAccessToProtectedBranchQuery(
	props: UseReposGetTeamsWithAccessToProtectedBranchQueryProps,
) {
	const { owner, repo, branch } = props;

	return useQuery(['repos/get-teams-with-access-to-protected-branch', owner, repo, branch]);
}
