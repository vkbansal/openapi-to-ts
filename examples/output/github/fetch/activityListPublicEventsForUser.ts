export interface ActivityListPublicEventsForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListPublicEventsForUserPathParams {
	username: string;
}

export interface ActivityListPublicEventsForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListPublicEventsForUserPathParams {
	queryParams: ActivityListPublicEventsForUserQueryParams;
}

export async function activityListPublicEventsForUser(props: ActivityListPublicEventsForUserProps) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/events/public`, {
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
