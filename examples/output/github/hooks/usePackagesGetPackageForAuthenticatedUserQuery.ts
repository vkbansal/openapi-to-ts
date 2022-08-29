/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface PackagesGetPackageForAuthenticatedUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
}

export interface UsePackagesGetPackageForAuthenticatedUserQueryProps
	extends PackagesGetPackageForAuthenticatedUserPathParams {}

/**
 * Gets a specific package for a package owned by the authenticated user.
 *
 * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
 */

export function usePackagesGetPackageForAuthenticatedUserQuery(
	props: UsePackagesGetPackageForAuthenticatedUserQueryProps,
) {
	const { package_type, package_name } = props;

	return useQuery(['packages/get-package-for-authenticated-user', package_type, package_name]);
}
