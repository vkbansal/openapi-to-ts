export interface BillingGetGithubActionsBillingGhePathParams {
	enterprise: string;
}

export interface BillingGetGithubActionsBillingGheProps
	extends Omit<RequestInit, 'method' | 'body'>,
		BillingGetGithubActionsBillingGhePathParams {}

export async function billingGetGithubActionsBillingGhe(
	props: BillingGetGithubActionsBillingGheProps,
) {
	const { enterprise, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/settings/billing/actions`, {
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
