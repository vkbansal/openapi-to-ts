/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface UsersListPublicSshKeysForAuthenticatedQueryParams {
	per_page?: number;
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
	});

	const json = await response.json();

	return json;
}