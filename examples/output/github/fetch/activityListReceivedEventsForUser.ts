export interface ActivityListReceivedEventsForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListReceivedEventsForUserPathParams {
	username: string;
}

export interface ActivityListReceivedEventsForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListReceivedEventsForUserPathParams {
	queryParams: ActivityListReceivedEventsForUserQueryParams;
}

export async function activityListReceivedEventsForUser(
	props: ActivityListReceivedEventsForUserProps,
) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/received_events`, {
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
