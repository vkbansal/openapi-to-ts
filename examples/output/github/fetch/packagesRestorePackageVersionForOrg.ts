export interface PackagesRestorePackageVersionForOrgPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	org: string;
	package_version_id: number;
}

export interface PackagesRestorePackageVersionForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesRestorePackageVersionForOrgPathParams {}

export async function packagesRestorePackageVersionForOrg(
	props: PackagesRestorePackageVersionForOrgProps,
) {
	const { package_type, package_name, org, package_version_id, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/packages/${package_type}/${package_name}/versions/${package_version_id}/restore`,
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
