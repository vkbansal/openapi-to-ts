/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseBillingGetGithubActionsBillingGheQueryPathParams {
	enterprise: string;
}

export interface UseBillingGetGithubActionsBillingGheQueryProps
	extends UseBillingGetGithubActionsBillingGheQueryPathParams {}

/**
 * Gets the summary of the free and paid GitHub Actions minutes used.
 *
 * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
 *
 * The authenticated user must be an enterprise admin.
 */

export function useBillingGetGithubActionsBillingGheQuery(
	props: UseBillingGetGithubActionsBillingGheQueryProps,
) {
	const { enterprise } = props;

	return useQuery(['billing/get-github-actions-billing-ghe', enterprise]);
}
