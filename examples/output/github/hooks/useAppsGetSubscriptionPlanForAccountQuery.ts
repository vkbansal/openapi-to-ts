import { useQuery } from '@tanstack/react-query';

export interface AppsGetSubscriptionPlanForAccountPathParams {
	account_id: number;
}

export interface UseAppsGetSubscriptionPlanForAccountQueryProps
	extends AppsGetSubscriptionPlanForAccountPathParams {}

export function useAppsGetSubscriptionPlanForAccountQuery(
	props: UseAppsGetSubscriptionPlanForAccountQueryProps,
) {
	const { account_id } = props;

	return useQuery(['apps/get-subscription-plan-for-account', account_id]);
}
