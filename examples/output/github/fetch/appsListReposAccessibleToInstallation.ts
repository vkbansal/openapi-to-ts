/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface AppsListReposAccessibleToInstallationQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface AppsListReposAccessibleToInstallationProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: AppsListReposAccessibleToInstallationQueryParams;
	paramsSerializer?: (params: AppsListReposAccessibleToInstallationQueryParams) => string;
}

/**
 * List repositories that an app installation can access.
 *
 * You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
 */
export async function appsListReposAccessibleToInstallation(
	props: AppsListReposAccessibleToInstallationProps,
) {
	const { ...rest } = props;

	return _fetcher<unknown, AppsListReposAccessibleToInstallationQueryParams, unknown>({
		path: `/installation/repositories`,
		method: 'GET',
		...rest,
	});
}
