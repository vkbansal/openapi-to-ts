export interface ActivityListReposWatchedByUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListReposWatchedByUserPathParams {
	username: string;
}

export interface ActivityListReposWatchedByUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListReposWatchedByUserPathParams {
	queryParams: ActivityListReposWatchedByUserQueryParams;
}

export async function activityListReposWatchedByUser(props: ActivityListReposWatchedByUserProps) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/subscriptions`, {
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
