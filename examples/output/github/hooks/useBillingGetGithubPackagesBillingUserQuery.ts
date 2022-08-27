import { useQuery } from '@tanstack/react-query';

export interface BillingGetGithubPackagesBillingUserPathParams {
	username: string;
}

export interface UseBillingGetGithubPackagesBillingUserQueryProps
	extends BillingGetGithubPackagesBillingUserPathParams {}

export function useBillingGetGithubPackagesBillingUserQuery(
	props: UseBillingGetGithubPackagesBillingUserQueryProps,
) {
	const { username } = props;

	return useQuery(['billing/get-github-packages-billing-user', username]);
}
