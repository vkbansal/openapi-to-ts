export interface ActivityGetThreadSubscriptionForAuthenticatedUserPathParams {
	thread_id: number;
}

export interface ActivityGetThreadSubscriptionForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityGetThreadSubscriptionForAuthenticatedUserPathParams {}

export async function activityGetThreadSubscriptionForAuthenticatedUser(
	props: ActivityGetThreadSubscriptionForAuthenticatedUserProps,
) {
	const { thread_id, ...rest } = props;

	const response = await fetch(`/notifications/threads/${thread_id}/subscription`, {
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
