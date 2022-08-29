/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface PackagesRestorePackageVersionForOrgPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	org: string;
	package_version_id: number;
}

export interface PackagesRestorePackageVersionForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesRestorePackageVersionForOrgPathParams {}

/**
 * Restores a specific package version in an organization.
 *
 * You can restore a deleted package under the following conditions:
 *   - The package was deleted within the last 30 days.
 *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
 *
 * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:write` scope. In addition:
 * - If `package_type` is not `container`, your token must also include the `repo` scope.
 * - If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.
 */
export async function packagesRestorePackageVersionForOrg(
	props: PackagesRestorePackageVersionForOrgProps,
) {
	const { package_type, package_name, org, package_version_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/orgs/${org}/packages/${package_type}/${package_name}/versions/${package_version_id}/restore`,
		method: 'POST',
		...rest,
	});
}
