/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

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

/**
 * We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.
 */
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
