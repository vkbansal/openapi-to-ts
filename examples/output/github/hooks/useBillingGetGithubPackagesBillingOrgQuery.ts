import { useQuery } from '@tanstack/react-query';

export interface BillingGetGithubPackagesBillingOrgPathParams {
	org: string;
}

export interface UseBillingGetGithubPackagesBillingOrgQueryProps
	extends BillingGetGithubPackagesBillingOrgPathParams {}

export function useBillingGetGithubPackagesBillingOrgQuery(
	props: UseBillingGetGithubPackagesBillingOrgQueryProps,
) {
	const { org } = props;

	return useQuery(['billing/get-github-packages-billing-org', org]);
}
