export interface UsersListFollowersForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsersListFollowersForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: UsersListFollowersForAuthenticatedUserQueryParams;
}

export async function usersListFollowersForAuthenticatedUser(
	props: UsersListFollowersForAuthenticatedUserProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/followers`, {
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
