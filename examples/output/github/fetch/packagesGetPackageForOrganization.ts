export interface PackagesGetPackageForOrganizationPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	org: string;
}

export interface PackagesGetPackageForOrganizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesGetPackageForOrganizationPathParams {}

export async function packagesGetPackageForOrganization(
	props: PackagesGetPackageForOrganizationProps,
) {
	const { package_type, package_name, org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/packages/${package_type}/${package_name}`, {
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
