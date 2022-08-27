import { useQuery } from '@tanstack/react-query';

export interface BillingGetGithubPackagesBillingGhePathParams {
	enterprise: string;
}

export interface UseBillingGetGithubPackagesBillingGheQueryProps
	extends BillingGetGithubPackagesBillingGhePathParams {}

export function useBillingGetGithubPackagesBillingGheQuery(
	props: UseBillingGetGithubPackagesBillingGheQueryProps,
) {
	const { enterprise } = props;

	return useQuery(['billing/get-github-packages-billing-ghe', enterprise]);
}
