import { useQuery } from '@tanstack/react-query';

export interface PackagesGetPackageVersionForOrganizationPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	org: string;
	package_version_id: number;
}

export interface UsePackagesGetPackageVersionForOrganizationQueryProps
	extends PackagesGetPackageVersionForOrganizationPathParams {}

export function usePackagesGetPackageVersionForOrganizationQuery(
	props: UsePackagesGetPackageVersionForOrganizationQueryProps,
) {
	const { package_type, package_name, org, package_version_id } = props;

	return useQuery([
		'packages/get-package-version-for-organization',
		package_type,
		package_name,
		org,
		package_version_id,
	]);
}
