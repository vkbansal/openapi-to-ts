export interface AppsGetSubscriptionPlanForAccountStubbedPathParams {
	account_id: number;
}

export interface AppsGetSubscriptionPlanForAccountStubbedProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsGetSubscriptionPlanForAccountStubbedPathParams {}

export async function appsGetSubscriptionPlanForAccountStubbed(
	props: AppsGetSubscriptionPlanForAccountStubbedProps,
) {
	const { account_id, ...rest } = props;

	const response = await fetch(`/marketplace_listing/stubbed/accounts/${account_id}`, {
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
