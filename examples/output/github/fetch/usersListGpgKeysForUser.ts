export interface UsersListGpgKeysForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsersListGpgKeysForUserPathParams {
	username: string;
}

export interface UsersListGpgKeysForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersListGpgKeysForUserPathParams {
	queryParams: UsersListGpgKeysForUserQueryParams;
}

export async function usersListGpgKeysForUser(props: UsersListGpgKeysForUserProps) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/gpg_keys`, {
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
