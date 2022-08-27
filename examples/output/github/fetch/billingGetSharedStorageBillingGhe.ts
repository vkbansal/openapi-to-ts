export interface BillingGetSharedStorageBillingGhePathParams {
	enterprise: string;
}

export interface BillingGetSharedStorageBillingGheProps
	extends Omit<RequestInit, 'method' | 'body'>,
		BillingGetSharedStorageBillingGhePathParams {}

export async function billingGetSharedStorageBillingGhe(
	props: BillingGetSharedStorageBillingGheProps,
) {
	const { enterprise, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/settings/billing/shared-storage`, {
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
