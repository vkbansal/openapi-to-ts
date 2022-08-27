import { useQuery } from '@tanstack/react-query';

export interface OrgsListAppInstallationsPathParams {
	org: string;
}

export interface OrgsListAppInstallationsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseOrgsListAppInstallationsQueryProps extends OrgsListAppInstallationsPathParams {
	queryParams: OrgsListAppInstallationsQueryParams;
}

export function useOrgsListAppInstallationsQuery(props: UseOrgsListAppInstallationsQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['orgs/list-app-installations', org, queryParams]);
}
