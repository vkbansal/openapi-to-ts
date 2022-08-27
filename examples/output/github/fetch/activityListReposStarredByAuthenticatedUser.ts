export interface ActivityListReposStarredByAuthenticatedUserQueryParams {
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

export interface ActivityListReposStarredByAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: ActivityListReposStarredByAuthenticatedUserQueryParams;
}

export async function activityListReposStarredByAuthenticatedUser(
	props: ActivityListReposStarredByAuthenticatedUserProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/starred`, {
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
