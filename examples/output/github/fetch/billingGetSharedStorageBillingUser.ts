export interface BillingGetSharedStorageBillingUserPathParams {
	username: string;
}

export interface BillingGetSharedStorageBillingUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		BillingGetSharedStorageBillingUserPathParams {}

export async function billingGetSharedStorageBillingUser(
	props: BillingGetSharedStorageBillingUserProps,
) {
	const { username, ...rest } = props;

	const response = await fetch(`/users/${username}/settings/billing/shared-storage`, {
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
