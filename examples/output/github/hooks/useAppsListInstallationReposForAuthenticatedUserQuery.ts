import { useQuery } from '@tanstack/react-query';

export interface AppsListInstallationReposForAuthenticatedUserPathParams {
	installation_id: number;
}

export interface AppsListInstallationReposForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseAppsListInstallationReposForAuthenticatedUserQueryProps
	extends AppsListInstallationReposForAuthenticatedUserPathParams {
	queryParams: AppsListInstallationReposForAuthenticatedUserQueryParams;
}

export function useAppsListInstallationReposForAuthenticatedUserQuery(
	props: UseAppsListInstallationReposForAuthenticatedUserQueryProps,
) {
	const { installation_id, queryParams } = props;

	return useQuery([
		'apps/list-installation-repos-for-authenticated-user',
		installation_id,
		queryParams,
	]);
}
