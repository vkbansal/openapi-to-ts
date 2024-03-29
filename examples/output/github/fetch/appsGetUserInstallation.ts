/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface AppsGetUserInstallationPathParams {
	username: string;
}

export interface AppsGetUserInstallationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsGetUserInstallationPathParams {}

/**
 * Enables an authenticated GitHub App to find the user’s installation information.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 */
export async function appsGetUserInstallation(props: AppsGetUserInstallationProps) {
	const { username, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/users/${username}/installation`,
		method: 'GET',
		...rest,
	});
}
