import { useQuery } from '@tanstack/react-query';

export interface AppsListPlansStubbedQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseAppsListPlansStubbedQueryProps {
	queryParams: AppsListPlansStubbedQueryParams;
}

export function useAppsListPlansStubbedQuery(props: UseAppsListPlansStubbedQueryProps) {
	const { queryParams } = props;

	return useQuery(['apps/list-plans-stubbed', queryParams]);
}
