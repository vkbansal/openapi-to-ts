export interface PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams {
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

export interface PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	org: string;
}

export interface PackagesGetAllPackageVersionsForPackageOwnedByOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams {
	queryParams: PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams;
}

export async function packagesGetAllPackageVersionsForPackageOwnedByOrg(
	props: PackagesGetAllPackageVersionsForPackageOwnedByOrgProps,
) {
	const { package_type, package_name, org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/packages/${package_type}/${package_name}/versions`, {
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
