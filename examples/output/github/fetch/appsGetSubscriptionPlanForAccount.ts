export interface AppsGetSubscriptionPlanForAccountPathParams {
	account_id: number;
}

export interface AppsGetSubscriptionPlanForAccountProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsGetSubscriptionPlanForAccountPathParams {}

export async function appsGetSubscriptionPlanForAccount(
	props: AppsGetSubscriptionPlanForAccountProps,
) {
	const { account_id, ...rest } = props;

	const response = await fetch(`/marketplace_listing/accounts/${account_id}`, {
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
