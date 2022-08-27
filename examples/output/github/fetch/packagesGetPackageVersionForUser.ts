export interface PackagesGetPackageVersionForUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	package_version_id: number;
	username: string;
}

export interface PackagesGetPackageVersionForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesGetPackageVersionForUserPathParams {}

export async function packagesGetPackageVersionForUser(
	props: PackagesGetPackageVersionForUserProps,
) {
	const { package_type, package_name, package_version_id, username, ...rest } = props;

	const response = await fetch(
		`/users/${username}/packages/${package_type}/${package_name}/versions/${package_version_id}`,
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
