export interface UsersListFollowingForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsersListFollowingForUserPathParams {
	username: string;
}

export interface UsersListFollowingForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersListFollowingForUserPathParams {
	queryParams: UsersListFollowingForUserQueryParams;
}

export async function usersListFollowingForUser(props: UsersListFollowingForUserProps) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/following`, {
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
