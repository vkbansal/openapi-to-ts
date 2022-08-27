/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface UsersGetGpgKeyForAuthenticatedPathParams {
	gpg_key_id: number;
}

export interface UsersGetGpgKeyForAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersGetGpgKeyForAuthenticatedPathParams {}

export async function usersGetGpgKeyForAuthenticated(props: UsersGetGpgKeyForAuthenticatedProps) {
	const { gpg_key_id, ...rest } = props;

	const response = await fetch(`/user/gpg_keys/${gpg_key_id}`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
