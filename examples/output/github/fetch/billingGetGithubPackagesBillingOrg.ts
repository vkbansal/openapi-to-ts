export interface BillingGetGithubPackagesBillingOrgPathParams {
	org: string;
}

export interface BillingGetGithubPackagesBillingOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		BillingGetGithubPackagesBillingOrgPathParams {}

export async function billingGetGithubPackagesBillingOrg(
	props: BillingGetGithubPackagesBillingOrgProps,
) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/settings/billing/packages`, {
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
