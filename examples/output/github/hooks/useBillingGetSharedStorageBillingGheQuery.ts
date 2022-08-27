import { useQuery } from '@tanstack/react-query';

export interface BillingGetSharedStorageBillingGhePathParams {
	enterprise: string;
}

export interface UseBillingGetSharedStorageBillingGheQueryProps
	extends BillingGetSharedStorageBillingGhePathParams {}

export function useBillingGetSharedStorageBillingGheQuery(
	props: UseBillingGetSharedStorageBillingGheQueryProps,
) {
	const { enterprise } = props;

	return useQuery(['billing/get-shared-storage-billing-ghe', enterprise]);
}
