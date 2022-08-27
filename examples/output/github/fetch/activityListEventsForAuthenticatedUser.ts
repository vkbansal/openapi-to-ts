export interface ActivityListEventsForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListEventsForAuthenticatedUserPathParams {
	username: string;
}

export interface ActivityListEventsForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListEventsForAuthenticatedUserPathParams {
	queryParams: ActivityListEventsForAuthenticatedUserQueryParams;
}

export async function activityListEventsForAuthenticatedUser(
	props: ActivityListEventsForAuthenticatedUserProps,
) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/events`, {
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
