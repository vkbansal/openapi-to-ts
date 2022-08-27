import { useQuery } from '@tanstack/react-query';

export interface PackagesGetPackageForAuthenticatedUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
}

export interface UsePackagesGetPackageForAuthenticatedUserQueryProps
	extends PackagesGetPackageForAuthenticatedUserPathParams {}

export function usePackagesGetPackageForAuthenticatedUserQuery(
	props: UsePackagesGetPackageForAuthenticatedUserQueryProps,
) {
	const { package_type, package_name } = props;

	return useQuery(['packages/get-package-for-authenticated-user', package_type, package_name]);
}
