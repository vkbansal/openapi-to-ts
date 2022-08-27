import { useQuery } from '@tanstack/react-query';

export interface BillingGetSharedStorageBillingUserPathParams {
	username: string;
}

export interface UseBillingGetSharedStorageBillingUserQueryProps
	extends BillingGetSharedStorageBillingUserPathParams {}

export function useBillingGetSharedStorageBillingUserQuery(
	props: UseBillingGetSharedStorageBillingUserQueryProps,
) {
	const { username } = props;

	return useQuery(['billing/get-shared-storage-billing-user', username]);
}
