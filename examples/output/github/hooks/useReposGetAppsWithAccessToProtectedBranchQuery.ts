/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface ReposGetAppsWithAccessToProtectedBranchPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposGetAppsWithAccessToProtectedBranchQueryProps
	extends ReposGetAppsWithAccessToProtectedBranchPathParams {}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
 */

export function useReposGetAppsWithAccessToProtectedBranchQuery(
	props: UseReposGetAppsWithAccessToProtectedBranchQueryProps,
) {
	const { owner, repo, branch } = props;

	return useQuery(['repos/get-apps-with-access-to-protected-branch', owner, repo, branch]);
}
