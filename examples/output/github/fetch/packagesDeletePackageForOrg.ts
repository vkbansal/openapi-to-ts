/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface PackagesDeletePackageForOrgPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	org: string;
}

export interface PackagesDeletePackageForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesDeletePackageForOrgPathParams {}

/**
 * Deletes an entire package in an organization. You cannot delete a public package if any version of the package has more than 25 downloads. In this scenario, contact GitHub support for further assistance.
 *
 * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope. In addition:
 * - If `package_type` is not `container`, your token must also include the `repo` scope.
 * - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
 */
export async function packagesDeletePackageForOrg(props: PackagesDeletePackageForOrgProps) {
	const { package_type, package_name, org, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/orgs/${org}/packages/${package_type}/${package_name}`,
		method: 'DELETE',
		...rest,
	});
}
