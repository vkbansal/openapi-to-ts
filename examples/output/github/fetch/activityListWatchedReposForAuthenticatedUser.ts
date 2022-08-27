export interface ActivityListWatchedReposForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListWatchedReposForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: ActivityListWatchedReposForAuthenticatedUserQueryParams;
}

export async function activityListWatchedReposForAuthenticatedUser(
	props: ActivityListWatchedReposForAuthenticatedUserProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/subscriptions`, {
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
