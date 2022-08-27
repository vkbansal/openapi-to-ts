export interface ActivityMarkRepoNotificationsAsReadPathParams {
	owner: string;
	repo: string;
}

export interface ActivityMarkRepoNotificationsAsReadRequestBody {
	/**
	 * Describes the last point that notifications were checked. Anything updated since this time will not be marked as read. If you omit this parameter, all notifications are marked as read. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Default: The current timestamp.
	 */
	last_read_at?: string;
}

export interface ActivityMarkRepoNotificationsAsReadProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityMarkRepoNotificationsAsReadPathParams {
	body: ActivityMarkRepoNotificationsAsReadRequestBody;
}

export async function activityMarkRepoNotificationsAsRead(
	props: ActivityMarkRepoNotificationsAsReadProps,
) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/notifications`, {
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
