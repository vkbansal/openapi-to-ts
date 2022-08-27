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

export async function packagesDeletePackageForAuthenticatedUser(
	props: PackagesDeletePackageForAuthenticatedUserProps,
) {
	const { package_type, package_name, ...rest } = props;

	const response = await fetch(`/user/packages/${package_type}/${package_name}`, {
		method: 'DELETE',
		...rest,
	});

	const json = await response.json();

	return json;
}
