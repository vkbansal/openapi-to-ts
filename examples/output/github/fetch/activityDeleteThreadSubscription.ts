export interface ActivityDeleteThreadSubscriptionPathParams {
	thread_id: number;
}

export interface ActivityDeleteThreadSubscriptionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityDeleteThreadSubscriptionPathParams {}

export async function activityDeleteThreadSubscription(
	props: ActivityDeleteThreadSubscriptionProps,
) {
	const { thread_id, ...rest } = props;

	const response = await fetch(`/notifications/threads/${thread_id}/subscription`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
