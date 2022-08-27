import { useQuery } from '@tanstack/react-query';

export interface PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
	org: string;
}

export interface PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams {
	/**
	 * @default 1
	 */
	page?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default "active"
	 */
	state?: 'active' | 'deleted';
}

export interface UsePackagesGetAllPackageVersionsForPackageOwnedByOrgQueryProps
	extends PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams {
	queryParams: PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams;
}

export function usePackagesGetAllPackageVersionsForPackageOwnedByOrgQuery(
	props: UsePackagesGetAllPackageVersionsForPackageOwnedByOrgQueryProps,
) {
	const { package_type, package_name, org, queryParams } = props;

	return useQuery([
		'packages/get-all-package-versions-for-package-owned-by-org',
		package_type,
		package_name,
		org,
		queryParams,
	]);
}
