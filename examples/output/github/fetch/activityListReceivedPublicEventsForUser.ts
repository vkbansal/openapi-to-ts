export interface ActivityListReceivedPublicEventsForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListReceivedPublicEventsForUserPathParams {
	username: string;
}

export interface ActivityListReceivedPublicEventsForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListReceivedPublicEventsForUserPathParams {
	queryParams: ActivityListReceivedPublicEventsForUserQueryParams;
}

export async function activityListReceivedPublicEventsForUser(
	props: ActivityListReceivedPublicEventsForUserProps,
) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/received_events/public`, {
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
