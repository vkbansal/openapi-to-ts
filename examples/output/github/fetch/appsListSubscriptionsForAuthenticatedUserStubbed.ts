export interface AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface AppsListSubscriptionsForAuthenticatedUserStubbedProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams;
}

export async function appsListSubscriptionsForAuthenticatedUserStubbed(
	props: AppsListSubscriptionsForAuthenticatedUserStubbedProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/marketplace_purchases/stubbed`, {
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
