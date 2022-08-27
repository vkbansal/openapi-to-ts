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
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
