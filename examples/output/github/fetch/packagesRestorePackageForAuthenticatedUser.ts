export interface PackagesRestorePackageForAuthenticatedUserQueryParams {
	token?: string;
}

export interface PackagesRestorePackageForAuthenticatedUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
}

export interface PackagesRestorePackageForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesRestorePackageForAuthenticatedUserPathParams {
	queryParams: PackagesRestorePackageForAuthenticatedUserQueryParams;
}

export async function packagesRestorePackageForAuthenticatedUser(
	props: PackagesRestorePackageForAuthenticatedUserProps,
) {
	const { package_type, package_name, queryParams, ...rest } = props;

	const response = await fetch(`/user/packages/${package_type}/${package_name}/restore`, {
		method: 'POST',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
