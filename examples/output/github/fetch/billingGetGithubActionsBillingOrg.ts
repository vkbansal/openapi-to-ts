/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface BillingGetGithubActionsBillingOrgPathParams {
	org: string;
}

export interface BillingGetGithubActionsBillingOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		BillingGetGithubActionsBillingOrgPathParams {}

export async function billingGetGithubActionsBillingOrg(
	props: BillingGetGithubActionsBillingOrgProps,
) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/settings/billing/actions`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}