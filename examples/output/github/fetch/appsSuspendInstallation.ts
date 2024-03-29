/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface AppsSuspendInstallationPathParams {
	installation_id: number;
}

export interface AppsSuspendInstallationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsSuspendInstallationPathParams {}

/**
 * Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub API or webhook events is blocked for that account.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 */
export async function appsSuspendInstallation(props: AppsSuspendInstallationProps) {
	const { installation_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/app/installations/${installation_id}/suspended`,
		method: 'PUT',
		...rest,
	});
}
