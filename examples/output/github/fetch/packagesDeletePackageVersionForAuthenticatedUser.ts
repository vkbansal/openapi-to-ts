export interface PackagesDeletePackageVersionForAuthenticatedUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	package_version_id: number;
}

export interface PackagesDeletePackageVersionForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesDeletePackageVersionForAuthenticatedUserPathParams {}

export async function packagesDeletePackageVersionForAuthenticatedUser(
	props: PackagesDeletePackageVersionForAuthenticatedUserProps,
) {
	const { package_type, package_name, package_version_id, ...rest } = props;

	const response = await fetch(
		`/user/packages/${package_type}/${package_name}/versions/${package_version_id}`,
		{
			method: 'DELETE',
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
