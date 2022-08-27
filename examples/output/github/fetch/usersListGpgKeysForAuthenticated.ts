export interface UsersListGpgKeysForAuthenticatedQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsersListGpgKeysForAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: UsersListGpgKeysForAuthenticatedQueryParams;
}

export async function usersListGpgKeysForAuthenticated(
	props: UsersListGpgKeysForAuthenticatedProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/gpg_keys`, {
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
