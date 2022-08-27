export interface PackagesGetPackageVersionForOrganizationPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	org: string;
	package_version_id: number;
}

export interface PackagesGetPackageVersionForOrganizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesGetPackageVersionForOrganizationPathParams {}

export async function packagesGetPackageVersionForOrganization(
	props: PackagesGetPackageVersionForOrganizationProps,
) {
	const { package_type, package_name, org, package_version_id, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/packages/${package_type}/${package_name}/versions/${package_version_id}`,
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
