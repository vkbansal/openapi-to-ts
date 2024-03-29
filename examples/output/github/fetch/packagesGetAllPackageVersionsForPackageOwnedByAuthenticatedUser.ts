/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
}

export interface PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams {
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

export interface PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams {
	queryParams: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams;
	paramsSerializer?: (
		params: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams,
	) => string;
}

/**
 * Returns all package versions for a package owned by the authenticated user.
 *
 * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
 */
export async function packagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser(
	props: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserProps,
) {
	const { package_type, package_name, ...rest } = props;

	return _fetcher<
		unknown,
		PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams,
		unknown
	>({
		path: `/user/packages/${package_type}/${package_name}/versions`,
		method: 'GET',
		...rest,
	});
}
