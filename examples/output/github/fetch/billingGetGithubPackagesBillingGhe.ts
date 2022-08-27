/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface BillingGetGithubPackagesBillingGhePathParams {
	enterprise: string;
}

export interface BillingGetGithubPackagesBillingGheProps
	extends Omit<RequestInit, 'method' | 'body'>,
		BillingGetGithubPackagesBillingGhePathParams {}

export async function billingGetGithubPackagesBillingGhe(
	props: BillingGetGithubPackagesBillingGheProps,
) {
	const { enterprise, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/settings/billing/packages`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}