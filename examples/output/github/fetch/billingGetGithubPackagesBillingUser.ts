export interface BillingGetGithubPackagesBillingUserPathParams {
	username: string;
}

export interface BillingGetGithubPackagesBillingUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		BillingGetGithubPackagesBillingUserPathParams {}

export async function billingGetGithubPackagesBillingUser(
	props: BillingGetGithubPackagesBillingUserProps,
) {
	const { username, ...rest } = props;

	const response = await fetch(`/users/${username}/settings/billing/packages`, {
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
