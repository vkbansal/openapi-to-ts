/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface PackagesDeletePackageVersionForOrgPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	org: string;
	package_version_id: number;
}

export interface PackagesDeletePackageVersionForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesDeletePackageVersionForOrgPathParams {}

/**
 * Deletes a specific package version in an organization. If the package is public and the package version has more than 25 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
 *
 * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope. In addition:
 * - If `package_type` is not `container`, your token must also include the `repo` scope.
 * - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
 */
export async function packagesDeletePackageVersionForOrg(
	props: PackagesDeletePackageVersionForOrgProps,
) {
	const { package_type, package_name, org, package_version_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/orgs/${org}/packages/${package_type}/${package_name}/versions/${package_version_id}`,
		method: 'DELETE',
		...rest,
	});
}
