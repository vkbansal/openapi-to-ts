export interface ActivityMarkThreadAsReadPathParams {
	thread_id: number;
}

export interface ActivityMarkThreadAsReadProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityMarkThreadAsReadPathParams {}

export async function activityMarkThreadAsRead(props: ActivityMarkThreadAsReadProps) {
	const { thread_id, ...rest } = props;

	const response = await fetch(`/notifications/threads/${thread_id}`, {
		method: 'PATCH',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
