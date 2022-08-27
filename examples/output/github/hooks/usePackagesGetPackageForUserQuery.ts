import { useQuery } from '@tanstack/react-query';

export interface PackagesGetPackageForUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	username: string;
}

export interface UsePackagesGetPackageForUserQueryProps
	extends PackagesGetPackageForUserPathParams {}

export function usePackagesGetPackageForUserQuery(props: UsePackagesGetPackageForUserQueryProps) {
	const { package_type, package_name, username } = props;

	return useQuery(['packages/get-package-for-user', package_type, package_name, username]);
}
