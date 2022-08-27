import { useQuery } from '@tanstack/react-query';

export interface AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
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
