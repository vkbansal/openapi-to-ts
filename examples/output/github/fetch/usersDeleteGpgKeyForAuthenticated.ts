export interface UsersDeleteGpgKeyForAuthenticatedPathParams {
	gpg_key_id: number;
}

export interface UsersDeleteGpgKeyForAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersDeleteGpgKeyForAuthenticatedPathParams {}

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
