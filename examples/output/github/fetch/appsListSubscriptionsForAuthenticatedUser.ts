export interface AppsListSubscriptionsForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface AppsListSubscriptionsForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: AppsListSubscriptionsForAuthenticatedUserQueryParams;
}

export async function appsListSubscriptionsForAuthenticatedUser(
	props: AppsListSubscriptionsForAuthenticatedUserProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/marketplace_purchases`, {
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
