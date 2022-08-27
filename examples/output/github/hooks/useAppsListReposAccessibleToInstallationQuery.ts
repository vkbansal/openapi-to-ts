import { useQuery } from '@tanstack/react-query';

export interface AppsListReposAccessibleToInstallationQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseAppsListReposAccessibleToInstallationQueryProps {
	queryParams: AppsListReposAccessibleToInstallationQueryParams;
}

export function useAppsListReposAccessibleToInstallationQuery(
	props: UseAppsListReposAccessibleToInstallationQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['apps/list-repos-accessible-to-installation', queryParams]);
}
