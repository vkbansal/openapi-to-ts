/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ChecksSetSuitesPreferencesPathParams {
	owner: string;
	repo: string;
}

export interface ChecksSetSuitesPreferencesRequestBody {
	/**
	 * Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default. See the [`auto_trigger_checks` object](https://docs.github.com/rest/reference/checks#auto_trigger_checks-object) description for details.
	 */
	auto_trigger_checks?: Array<{
		/**
		 * The `id` of the GitHub App.
		 */
		app_id: number;
		/**
		 * Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository, or `false` to disable them.
		 * @default true
		 */
		setting: boolean;
	}>;
}

export interface ChecksSetSuitesPreferencesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ChecksSetSuitesPreferencesPathParams {
	body: ChecksSetSuitesPreferencesRequestBody;
}

/**
 * Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/rest/reference/checks#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.
 */
export async function checksSetSuitesPreferences(props: ChecksSetSuitesPreferencesProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, unknown, ChecksSetSuitesPreferencesRequestBody>({
		path: `/repos/${owner}/${repo}/check-suites/preferences`,
		method: 'PATCH',
		...rest,
	});
}
