export interface BillingGetGithubActionsBillingUserPathParams {
	username: string;
}

export interface BillingGetGithubActionsBillingUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		BillingGetGithubActionsBillingUserPathParams {}

export async function billingGetGithubActionsBillingUser(
	props: BillingGetGithubActionsBillingUserProps,
) {
	const { username, ...rest } = props;

	const response = await fetch(`/users/${username}/settings/billing/actions`, {
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
