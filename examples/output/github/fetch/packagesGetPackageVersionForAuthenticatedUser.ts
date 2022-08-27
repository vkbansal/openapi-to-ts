export interface PackagesGetPackageVersionForAuthenticatedUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	package_version_id: number;
}

export interface PackagesGetPackageVersionForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesGetPackageVersionForAuthenticatedUserPathParams {}

export async function packagesGetPackageVersionForAuthenticatedUser(
	props: PackagesGetPackageVersionForAuthenticatedUserProps,
) {
	const { package_type, package_name, package_version_id, ...rest } = props;

	const response = await fetch(
		`/user/packages/${package_type}/${package_name}/versions/${package_version_id}`,
		{
			method: 'GET',
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
