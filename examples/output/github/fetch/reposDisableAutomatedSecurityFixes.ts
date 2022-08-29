/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposDisableAutomatedSecurityFixesPathParams {
	owner: string;
	repo: string;
}

export interface ReposDisableAutomatedSecurityFixesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDisableAutomatedSecurityFixesPathParams {}

/**
 * Disables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://help.github.com/en/articles/configuring-automated-security-fixes)".
 */
export async function reposDisableAutomatedSecurityFixes(
	props: ReposDisableAutomatedSecurityFixesProps,
) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/automated-security-fixes`,
		method: 'DELETE',
		...rest,
	});
}
