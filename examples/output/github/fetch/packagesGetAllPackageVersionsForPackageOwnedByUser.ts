export interface PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	username: string;
}

export interface PackagesGetAllPackageVersionsForPackageOwnedByUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams {}

export async function packagesGetAllPackageVersionsForPackageOwnedByUser(
	props: PackagesGetAllPackageVersionsForPackageOwnedByUserProps,
) {
	const { package_type, package_name, username, ...rest } = props;

	const response = await fetch(
		`/users/${username}/packages/${package_type}/${package_name}/versions`,
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
