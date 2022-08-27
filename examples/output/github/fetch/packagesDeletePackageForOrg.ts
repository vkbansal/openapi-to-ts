export interface PackagesDeletePackageForOrgPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	org: string;
}

export interface PackagesDeletePackageForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesDeletePackageForOrgPathParams {}

export async function packagesDeletePackageForOrg(props: PackagesDeletePackageForOrgProps) {
	const { package_type, package_name, org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/packages/${package_type}/${package_name}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
