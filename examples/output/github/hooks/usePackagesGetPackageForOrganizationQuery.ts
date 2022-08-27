/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface PackagesGetPackageForOrganizationPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	org: string;
}

export interface UsePackagesGetPackageForOrganizationQueryProps
	extends PackagesGetPackageForOrganizationPathParams {}

export function usePackagesGetPackageForOrganizationQuery(
	props: UsePackagesGetPackageForOrganizationQueryProps,
) {
	const { package_type, package_name, org } = props;

	return useQuery(['packages/get-package-for-organization', package_type, package_name, org]);
}