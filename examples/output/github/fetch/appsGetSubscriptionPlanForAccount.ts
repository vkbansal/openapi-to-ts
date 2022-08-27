/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	});

	const json = await response.json();

	return json;
}
