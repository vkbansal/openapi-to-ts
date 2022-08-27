export interface ActivityListOrgEventsForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListOrgEventsForAuthenticatedUserPathParams {
	username: string;
	org: string;
}

export interface ActivityListOrgEventsForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListOrgEventsForAuthenticatedUserPathParams {
	queryParams: ActivityListOrgEventsForAuthenticatedUserQueryParams;
}

export async function activityListOrgEventsForAuthenticatedUser(
	props: ActivityListOrgEventsForAuthenticatedUserProps,
) {
	const { username, org, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/events/orgs/${org}`, {
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
