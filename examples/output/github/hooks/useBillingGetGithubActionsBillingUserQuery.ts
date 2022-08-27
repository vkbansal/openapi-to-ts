import { useQuery } from '@tanstack/react-query';

export interface BillingGetGithubActionsBillingUserPathParams {
	username: string;
}

export interface UseBillingGetGithubActionsBillingUserQueryProps
	extends BillingGetGithubActionsBillingUserPathParams {}

export function useBillingGetGithubActionsBillingUserQuery(
	props: UseBillingGetGithubActionsBillingUserQueryProps,
) {
	const { username } = props;

	return useQuery(['billing/get-github-actions-billing-user', username]);
}
