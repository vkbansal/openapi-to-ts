/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface UsersDeleteGpgKeyForAuthenticatedPathParams {
	gpg_key_id: number;
}

export interface UsersDeleteGpgKeyForAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersDeleteGpgKeyForAuthenticatedPathParams {}

/**
 * Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 */
export async function usersDeleteGpgKeyForAuthenticated(
	props: UsersDeleteGpgKeyForAuthenticatedProps,
) {
	const { gpg_key_id, ...rest } = props;

	const response = await fetch(`/user/gpg_keys/${gpg_key_id}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
