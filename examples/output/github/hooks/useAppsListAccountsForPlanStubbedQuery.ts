import { useQuery } from '@tanstack/react-query';

export interface AppsListAccountsForPlanStubbedPathParams {
	plan_id: number;
}

export interface AppsListAccountsForPlanStubbedQueryParams {
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

export interface UseAppsListAccountsForPlanStubbedQueryProps
	extends AppsListAccountsForPlanStubbedPathParams {
	queryParams: AppsListAccountsForPlanStubbedQueryParams;
}

export function useAppsListAccountsForPlanStubbedQuery(
	props: UseAppsListAccountsForPlanStubbedQueryProps,
) {
	const { plan_id, queryParams } = props;

	return useQuery(['apps/list-accounts-for-plan-stubbed', plan_id, queryParams]);
}
