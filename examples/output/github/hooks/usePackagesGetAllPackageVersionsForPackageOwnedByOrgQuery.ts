/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	org: string;
}

export interface PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams {
	/**
	 * @default 1
	 */
	page?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default "active"
	 */
	state?: 'active' | 'deleted';
}

export interface UsePackagesGetAllPackageVersionsForPackageOwnedByOrgQueryProps
	extends PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams {
	queryParams: PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams;
}

/**
 * Returns all package versions for a package owned by an organization.
 *
 * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
 */

export function usePackagesGetAllPackageVersionsForPackageOwnedByOrgQuery(
	props: UsePackagesGetAllPackageVersionsForPackageOwnedByOrgQueryProps,
) {
	const { package_type, package_name, org, queryParams } = props;

	return useQuery([
		'packages/get-all-package-versions-for-package-owned-by-org',
		package_type,
		package_name,
		org,
		queryParams,
	]);
}
