export interface ActivityGetThreadPathParams {
	thread_id: number;
}

export interface ActivityGetThreadProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityGetThreadPathParams {}

export async function activityGetThread(props: ActivityGetThreadProps) {
	const { thread_id, ...rest } = props;

	const response = await fetch(`/notifications/threads/${thread_id}`, {
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
