/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface PackagesDeletePackageVersionForOrgPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	org: string;
	package_version_id: number;
}

export interface PackagesDeletePackageVersionForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesDeletePackageVersionForOrgPathParams {}

export async function packagesDeletePackageVersionForOrg(
	props: PackagesDeletePackageVersionForOrgProps,
) {
	const { package_type, package_name, org, package_version_id, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/packages/${package_type}/${package_name}/versions/${package_version_id}`,
		{
			method: 'DELETE',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}
