export interface UsersGetPublicSshKeyForAuthenticatedPathParams {
	key_id: number;
}

export interface UsersGetPublicSshKeyForAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersGetPublicSshKeyForAuthenticatedPathParams {}

export async function usersGetPublicSshKeyForAuthenticated(
	props: UsersGetPublicSshKeyForAuthenticatedProps,
) {
	const { key_id, ...rest } = props;

	const response = await fetch(`/user/keys/${key_id}`, {
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
