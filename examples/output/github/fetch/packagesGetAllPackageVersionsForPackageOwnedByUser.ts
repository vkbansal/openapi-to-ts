/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	username: string;
}

export interface PackagesGetAllPackageVersionsForPackageOwnedByUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams {}

/**
 * Returns all package versions for a public package owned by a specified user.
 *
 * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
 */
export async function packagesGetAllPackageVersionsForPackageOwnedByUser(
	props: PackagesGetAllPackageVersionsForPackageOwnedByUserProps,
) {
	const { package_type, package_name, username, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/users/${username}/packages/${package_type}/${package_name}/versions`,
		method: 'GET',
		...rest,
	});
}
