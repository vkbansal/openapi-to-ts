import { useQuery } from '@tanstack/react-query';

export interface AppsListAccountsForPlanPathParams {
	plan_id: number;
}

export interface AppsListAccountsForPlanQueryParams {
	/**
	 * @default "created"
	 */
	sort?: 'created' | 'updated';
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseAppsListAccountsForPlanQueryProps extends AppsListAccountsForPlanPathParams {
	queryParams: AppsListAccountsForPlanQueryParams;
}

export function useAppsListAccountsForPlanQuery(props: UseAppsListAccountsForPlanQueryProps) {
	const { plan_id, queryParams } = props;

	return useQuery(['apps/list-accounts-for-plan', plan_id, queryParams]);
}
