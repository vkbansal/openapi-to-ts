/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseBillingGetSharedStorageBillingUserQueryPathParams {
	username: string;
}

export interface UseBillingGetSharedStorageBillingUserQueryProps
	extends UseBillingGetSharedStorageBillingUserQueryPathParams {}

/**
 * Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
 *
 * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
 *
 * Access tokens must have the `user` scope.
 */

export function useBillingGetSharedStorageBillingUserQuery(
	props: UseBillingGetSharedStorageBillingUserQueryProps,
) {
	const { username } = props;

	return useQuery(['billing/get-shared-storage-billing-user', username]);
}
