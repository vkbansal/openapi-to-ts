/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UsePackagesDeletePackageVersionForAuthenticatedUserMutationPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	package_version_id: number;
}

export interface UsePackagesDeletePackageVersionForAuthenticatedUserMutationProps
	extends UsePackagesDeletePackageVersionForAuthenticatedUserMutationPathParams {}

/**
 * Deletes a specific package version for a package owned by the authenticated user.  If the package is public and the package version has more than 25 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
 *
 * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
 */

export function usePackagesDeletePackageVersionForAuthenticatedUserMutation(
	props: UsePackagesDeletePackageVersionForAuthenticatedUserMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
