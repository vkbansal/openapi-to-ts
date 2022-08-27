/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface UsersListGpgKeysForAuthenticatedQueryParams {
	per_page?: number;
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
	});

	const json = await response.json();

	return json;
}
