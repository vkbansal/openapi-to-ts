export interface PackagesRestorePackageVersionForAuthenticatedUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	package_version_id: number;
}

export interface PackagesRestorePackageVersionForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesRestorePackageVersionForAuthenticatedUserPathParams {}

export async function packagesRestorePackageVersionForAuthenticatedUser(
	props: PackagesRestorePackageVersionForAuthenticatedUserProps,
) {
	const { package_type, package_name, package_version_id, ...rest } = props;

	const response = await fetch(
		`/user/packages/${package_type}/${package_name}/versions/${package_version_id}/restore`,
		{
			method: 'POST',
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
