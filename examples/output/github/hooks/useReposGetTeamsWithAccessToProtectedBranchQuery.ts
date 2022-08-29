/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposGetTeamsWithAccessToProtectedBranchQueryPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposGetTeamsWithAccessToProtectedBranchQueryProps
	extends UseReposGetTeamsWithAccessToProtectedBranchQueryPathParams {}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Lists the teams who have push access to this branch. The list includes child teams.
 */

export function useReposGetTeamsWithAccessToProtectedBranchQuery(
	props: UseReposGetTeamsWithAccessToProtectedBranchQueryProps,
) {
	const { owner, repo, branch } = props;

	return useQuery(['repos/get-teams-with-access-to-protected-branch', owner, repo, branch]);
}
