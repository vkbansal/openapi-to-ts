/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseBillingGetSharedStorageBillingOrgQueryPathParams {
	org: string;
}

export interface UseBillingGetSharedStorageBillingOrgQueryProps
	extends UseBillingGetSharedStorageBillingOrgQueryPathParams {}

/**
 * Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
 *
 * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
 *
 * Access tokens must have the `repo` or `admin:org` scope.
 */

export function useBillingGetSharedStorageBillingOrgQuery(
	props: UseBillingGetSharedStorageBillingOrgQueryProps,
) {
	const { org } = props;

	return useQuery(['billing/get-shared-storage-billing-org', org]);
}
