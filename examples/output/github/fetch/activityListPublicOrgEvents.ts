export interface ActivityListPublicOrgEventsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListPublicOrgEventsPathParams {
	org: string;
}

export interface ActivityListPublicOrgEventsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListPublicOrgEventsPathParams {
	queryParams: ActivityListPublicOrgEventsQueryParams;
}

export async function activityListPublicOrgEvents(props: ActivityListPublicOrgEventsProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/events`, {
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
