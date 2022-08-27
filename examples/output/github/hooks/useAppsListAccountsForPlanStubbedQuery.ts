/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface AppsListAccountsForPlanStubbedPathParams {
	plan_id: number;
}

export interface AppsListAccountsForPlanStubbedQueryParams {
	sort?: 'created' | 'updated';
	direction?: 'asc' | 'desc';
	per_page?: number;
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
