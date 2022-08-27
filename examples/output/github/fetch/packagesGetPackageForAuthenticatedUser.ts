export interface PackagesGetPackageForAuthenticatedUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
}

export interface PackagesGetPackageForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesGetPackageForAuthenticatedUserPathParams {}

export async function packagesGetPackageForAuthenticatedUser(
	props: PackagesGetPackageForAuthenticatedUserProps,
) {
	const { package_type, package_name, ...rest } = props;

	const response = await fetch(`/user/packages/${package_type}/${package_name}`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
