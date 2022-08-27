/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams {
	per_page?: number;
	page?: number;
}

export interface UseAppsListSubscriptionsForAuthenticatedUserStubbedQueryProps {
	queryParams: AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams;
}

export function useAppsListSubscriptionsForAuthenticatedUserStubbedQuery(
	props: UseAppsListSubscriptionsForAuthenticatedUserStubbedQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['apps/list-subscriptions-for-authenticated-user-stubbed', queryParams]);
}