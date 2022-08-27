import { useQuery } from '@tanstack/react-query';

export interface PackagesGetPackageVersionForAuthenticatedUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	package_version_id: number;
}

export interface UsePackagesGetPackageVersionForAuthenticatedUserQueryProps
	extends PackagesGetPackageVersionForAuthenticatedUserPathParams {}

export function usePackagesGetPackageVersionForAuthenticatedUserQuery(
	props: UsePackagesGetPackageVersionForAuthenticatedUserQueryProps,
) {
	const { package_type, package_name, package_version_id } = props;

	return useQuery([
		'packages/get-package-version-for-authenticated-user',
		package_type,
		package_name,
		package_version_id,
	]);
}
