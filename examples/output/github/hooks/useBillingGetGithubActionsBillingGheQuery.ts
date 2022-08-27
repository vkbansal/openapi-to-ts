import { useQuery } from '@tanstack/react-query';

export interface BillingGetGithubActionsBillingGhePathParams {
	enterprise: string;
}

export interface UseBillingGetGithubActionsBillingGheQueryProps
	extends BillingGetGithubActionsBillingGhePathParams {}

export function useBillingGetGithubActionsBillingGheQuery(
	props: UseBillingGetGithubActionsBillingGheQueryProps,
) {
	const { enterprise } = props;

	return useQuery(['billing/get-github-actions-billing-ghe', enterprise]);
}
