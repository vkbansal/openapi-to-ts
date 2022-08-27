export interface BillingGetSharedStorageBillingOrgPathParams {
	org: string;
}

export interface BillingGetSharedStorageBillingOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		BillingGetSharedStorageBillingOrgPathParams {}

export async function billingGetSharedStorageBillingOrg(
	props: BillingGetSharedStorageBillingOrgProps,
) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/settings/billing/shared-storage`, {
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
