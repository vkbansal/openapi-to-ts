import { useQuery } from '@tanstack/react-query';

export interface AppsListInstallationsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
	since?: string;
	outdated?: string;
}

export interface UseAppsListInstallationsQueryProps {
	queryParams: AppsListInstallationsQueryParams;
}

export function useAppsListInstallationsQuery(props: UseAppsListInstallationsQueryProps) {
	const { queryParams } = props;

	return useQuery(['apps/list-installations', queryParams]);
}
