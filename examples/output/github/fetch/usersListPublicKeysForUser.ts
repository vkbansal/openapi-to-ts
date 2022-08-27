export interface UsersListPublicKeysForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsersListPublicKeysForUserPathParams {
	username: string;
}

export interface UsersListPublicKeysForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersListPublicKeysForUserPathParams {
	queryParams: UsersListPublicKeysForUserQueryParams;
}

export async function usersListPublicKeysForUser(props: UsersListPublicKeysForUserProps) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/keys`, {
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
