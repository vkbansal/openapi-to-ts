export interface PackagesRestorePackageForOrgQueryParams {
	token?: string;
}

export interface PackagesRestorePackageForOrgPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	org: string;
}

export interface PackagesRestorePackageForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PackagesRestorePackageForOrgPathParams {
	queryParams: PackagesRestorePackageForOrgQueryParams;
}

export async function packagesRestorePackageForOrg(props: PackagesRestorePackageForOrgProps) {
	const { package_type, package_name, org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/packages/${package_type}/${package_name}/restore`, {
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
