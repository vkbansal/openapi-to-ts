export interface PackagesGetPackageForUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	username: string;
}

export interface PackagesGetPackageForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesGetPackageForUserPathParams {}

export async function packagesGetPackageForUser(props: PackagesGetPackageForUserProps) {
	const { package_type, package_name, username, ...rest } = props;

	const response = await fetch(`/users/${username}/packages/${package_type}/${package_name}`, {
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
