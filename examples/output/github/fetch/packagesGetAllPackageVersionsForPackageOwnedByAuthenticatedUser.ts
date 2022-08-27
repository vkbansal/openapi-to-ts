export interface PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams {
	/**
	 * @default 1
	 */
	page?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default "active"
	 */
	state?: 'active' | 'deleted';
}

export interface PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
}

export interface PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams {
	queryParams: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams;
}

export async function packagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser(
	props: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserProps,
) {
	const { package_type, package_name, queryParams, ...rest } = props;

	const response = await fetch(`/user/packages/${package_type}/${package_name}/versions`, {
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
