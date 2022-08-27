import { useQuery } from '@tanstack/react-query';

export interface BillingGetSharedStorageBillingOrgPathParams {
	org: string;
}

export interface UseBillingGetSharedStorageBillingOrgQueryProps
	extends BillingGetSharedStorageBillingOrgPathParams {}

export function useBillingGetSharedStorageBillingOrgQuery(
	props: UseBillingGetSharedStorageBillingOrgQueryProps,
) {
	const { org } = props;

	return useQuery(['billing/get-shared-storage-billing-org', org]);
}
