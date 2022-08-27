export interface ActivityMarkNotificationsAsReadRequestBody {
	/**
	 * Describes the last point that notifications were checked.
	 * @format date-time
	 */
	last_read_at?: string;
	/**
	 * Whether the notification has been read.
	 */
	read?: boolean;
}

export interface ActivityMarkNotificationsAsReadProps extends Omit<RequestInit, 'method' | 'body'> {
	body: ActivityMarkNotificationsAsReadRequestBody;
}

export async function activityMarkNotificationsAsRead(props: ActivityMarkNotificationsAsReadProps) {
	const { body, ...rest } = props;

	const response = await fetch(`/notifications`, {
		method: 'PUT',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
