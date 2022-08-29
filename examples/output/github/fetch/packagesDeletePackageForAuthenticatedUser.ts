/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface PackagesDeletePackageForAuthenticatedUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
}

export interface PackagesDeletePackageForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesDeletePackageForAuthenticatedUserPathParams {}

/**
 * Deletes a package owned by the authenticated user. You cannot delete a public package if any version of the package has more than 25 downloads. In this scenario, contact GitHub support for further assistance.
 *
 * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:delete` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
 */
export async function packagesDeletePackageForAuthenticatedUser(
	props: PackagesDeletePackageForAuthenticatedUserProps,
) {
	const { package_type, package_name, ...rest } = props;

	const response = await fetch(`/user/packages/${package_type}/${package_name}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
