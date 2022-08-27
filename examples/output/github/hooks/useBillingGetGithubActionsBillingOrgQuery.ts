import { useQuery } from '@tanstack/react-query';

export interface BillingGetGithubActionsBillingOrgPathParams {
	org: string;
}

export interface UseBillingGetGithubActionsBillingOrgQueryProps
	extends BillingGetGithubActionsBillingOrgPathParams {}

export function useBillingGetGithubActionsBillingOrgQuery(
	props: UseBillingGetGithubActionsBillingOrgQueryProps,
) {
	const { org } = props;

	return useQuery(['billing/get-github-actions-billing-org', org]);
}
