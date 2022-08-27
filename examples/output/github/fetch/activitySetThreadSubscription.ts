export interface ActivitySetThreadSubscriptionPathParams {
	thread_id: number;
}

export interface ActivitySetThreadSubscriptionRequestBody {
	/**
	 * Whether to block all notifications from a thread.
	 */
	ignored?: boolean;
}

export interface ActivitySetThreadSubscriptionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivitySetThreadSubscriptionPathParams {
	body: ActivitySetThreadSubscriptionRequestBody;
}

export async function activitySetThreadSubscription(props: ActivitySetThreadSubscriptionProps) {
	const { thread_id, body, ...rest } = props;

	const response = await fetch(`/notifications/threads/${thread_id}/subscription`, {
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
