export interface UsersDeletePublicSshKeyForAuthenticatedPathParams {
	key_id: number;
}

export interface UsersDeletePublicSshKeyForAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersDeletePublicSshKeyForAuthenticatedPathParams {}

export async function usersDeletePublicSshKeyForAuthenticated(
	props: UsersDeletePublicSshKeyForAuthenticatedProps,
) {
	const { key_id, ...rest } = props;

	const response = await fetch(`/user/keys/${key_id}`, {
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
