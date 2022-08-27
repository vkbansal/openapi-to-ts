import { useQuery } from '@tanstack/react-query';

export interface PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams {
	package_type: 'container' | 'docker' | 'maven' | 'npm' | 'nuget' | 'rubygems';
	package_name: string;
}

export interface PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams {
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

export interface UsePackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryProps
	extends PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams {
	queryParams: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams;
}

export function usePackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQuery(
	props: UsePackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryProps,
) {
	const { package_type, package_name, queryParams } = props;

	return useQuery([
		'packages/get-all-package-versions-for-package-owned-by-authenticated-user',
		package_type,
		package_name,
		queryParams,
	]);
}
