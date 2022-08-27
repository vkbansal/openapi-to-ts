export interface ActivityListPublicEventsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListPublicEventsProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: ActivityListPublicEventsQueryParams;
}

export async function activityListPublicEvents(props: ActivityListPublicEventsProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/events`, {
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
