/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposRemoveAppAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposRemoveAppAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposRemoveAppAccessRestrictionsPathParams {}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
 *
 * | Type    | Description                                                                                                                                                |
 * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
 */
export async function reposRemoveAppAccessRestrictions(
	props: ReposRemoveAppAccessRestrictionsProps,
) {
	const { owner, repo, branch, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/apps`,
		method: 'DELETE',
		...rest,
	});
}
