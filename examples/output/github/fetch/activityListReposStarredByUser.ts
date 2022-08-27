export interface ActivityListReposStarredByUserQueryParams {
	/**
	 * @default "created"
	 */
	sort?: 'created' | 'updated';
	/**
	 * @default "desc"
	 */
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListReposStarredByUserPathParams {
	username: string;
}

export interface ActivityListReposStarredByUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListReposStarredByUserPathParams {
	queryParams: ActivityListReposStarredByUserQueryParams;
}

export async function activityListReposStarredByUser(props: ActivityListReposStarredByUserProps) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/starred`, {
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
