import { useQuery } from '@tanstack/react-query';

export interface PackagesGetPackageVersionForUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	package_version_id: number;
	username: string;
}

export interface UsePackagesGetPackageVersionForUserQueryProps
	extends PackagesGetPackageVersionForUserPathParams {}

export function usePackagesGetPackageVersionForUserQuery(
	props: UsePackagesGetPackageVersionForUserQueryProps,
) {
	const { package_type, package_name, package_version_id, username } = props;

	return useQuery([
		'packages/get-package-version-for-user',
		package_type,
		package_name,
		package_version_id,
		username,
	]);
}
