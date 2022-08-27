export interface UsersListPublicSshKeysForAuthenticatedQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsersListPublicSshKeysForAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: UsersListPublicSshKeysForAuthenticatedQueryParams;
}

export async function usersListPublicSshKeysForAuthenticated(
	props: UsersListPublicSshKeysForAuthenticatedProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/keys`, {
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
