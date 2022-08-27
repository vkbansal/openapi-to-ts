import { useQuery } from '@tanstack/react-query';

export interface AppsListInstallationsForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseAppsListInstallationsForAuthenticatedUserQueryProps {
	queryParams: AppsListInstallationsForAuthenticatedUserQueryParams;
}

export function useAppsListInstallationsForAuthenticatedUserQuery(
	props: UseAppsListInstallationsForAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['apps/list-installations-for-authenticated-user', queryParams]);
}
