export interface ActivityListNotificationsForAuthenticatedUserQueryParams {
	all?: boolean;
	participating?: boolean;
	since?: string;
	before?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListNotificationsForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: ActivityListNotificationsForAuthenticatedUserQueryParams;
}

export async function activityListNotificationsForAuthenticatedUser(
	props: ActivityListNotificationsForAuthenticatedUserProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/notifications`, {
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
