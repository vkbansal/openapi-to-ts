import { useQuery } from '@tanstack/react-query';

export interface PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	username: string;
}

export interface UsePackagesGetAllPackageVersionsForPackageOwnedByUserQueryProps
	extends PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams {}

export function usePackagesGetAllPackageVersionsForPackageOwnedByUserQuery(
	props: UsePackagesGetAllPackageVersionsForPackageOwnedByUserQueryProps,
) {
	const { package_type, package_name, username } = props;

	return useQuery([
		'packages/get-all-package-versions-for-package-owned-by-user',
		package_type,
		package_name,
		username,
	]);
}
