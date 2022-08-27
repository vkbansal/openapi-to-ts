export interface UsersListFollowersForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsersListFollowersForUserPathParams {
	username: string;
}

export interface UsersListFollowersForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersListFollowersForUserPathParams {
	queryParams: UsersListFollowersForUserQueryParams;
}

export async function usersListFollowersForUser(props: UsersListFollowersForUserProps) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/followers`, {
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
