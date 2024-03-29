/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseReposRemoveTeamAccessRestrictionsMutationPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposRemoveTeamAccessRestrictionsMutationProps
	extends UseReposRemoveTeamAccessRestrictionsMutationPathParams {}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Removes the ability of a team to push to this branch. You can also remove push access for child teams.
 *
 * | Type    | Description                                                                                                                                         |
 * | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
 */

export function useReposRemoveTeamAccessRestrictionsMutation(
	props: UseReposRemoveTeamAccessRestrictionsMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
