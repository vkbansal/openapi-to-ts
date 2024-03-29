/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposGetBranchProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposGetBranchProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetBranchProtectionPathParams {}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 */
export async function reposGetBranchProtection(props: ReposGetBranchProtectionProps) {
	const { owner, repo, branch, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/branches/${branch}/protection`,
		method: 'GET',
		...rest,
	});
}
