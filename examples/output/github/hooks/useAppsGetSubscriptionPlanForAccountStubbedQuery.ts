import { useQuery } from '@tanstack/react-query';

export interface AppsGetSubscriptionPlanForAccountStubbedPathParams {
	account_id: number;
}

export interface UseAppsGetSubscriptionPlanForAccountStubbedQueryProps
	extends AppsGetSubscriptionPlanForAccountStubbedPathParams {}

export function useAppsGetSubscriptionPlanForAccountStubbedQuery(
	props: UseAppsGetSubscriptionPlanForAccountStubbedQueryProps,
) {
	const { account_id } = props;

	return useQuery(['apps/get-subscription-plan-for-account-stubbed', account_id]);
}
