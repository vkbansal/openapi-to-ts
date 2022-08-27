import { useQuery } from '@tanstack/react-query';

export interface AppsListSubscriptionsForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseAppsListSubscriptionsForAuthenticatedUserQueryProps {
	queryParams: AppsListSubscriptionsForAuthenticatedUserQueryParams;
}

export function useAppsListSubscriptionsForAuthenticatedUserQuery(
	props: UseAppsListSubscriptionsForAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['apps/list-subscriptions-for-authenticated-user', queryParams]);
}
