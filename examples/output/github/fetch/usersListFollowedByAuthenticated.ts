export interface UsersListFollowedByAuthenticatedQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsersListFollowedByAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: UsersListFollowedByAuthenticatedQueryParams;
}

export async function usersListFollowedByAuthenticated(
	props: UsersListFollowedByAuthenticatedProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/following`, {
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
