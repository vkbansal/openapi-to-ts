/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface BillingGetGithubPackagesBillingGhePathParams {
	enterprise: string;
}

export interface BillingGetGithubPackagesBillingGheProps
	extends Omit<RequestInit, 'method' | 'body'>,
		BillingGetGithubPackagesBillingGhePathParams {}

/**
 * Gets the free and paid storage used for GitHub Packages in gigabytes.
 *
 * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
 *
 * The authenticated user must be an enterprise admin.
 */
export async function billingGetGithubPackagesBillingGhe(
	props: BillingGetGithubPackagesBillingGheProps,
) {
	const { enterprise, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/settings/billing/packages`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
