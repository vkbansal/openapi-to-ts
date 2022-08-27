export interface UsersCreateGpgKeyForAuthenticatedRequestBody {
	/**
	 * A GPG key in ASCII-armored format.
	 */
	armored_public_key: string;
}

export interface UsersCreateGpgKeyForAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'> {
	body: UsersCreateGpgKeyForAuthenticatedRequestBody;
}

export async function usersCreateGpgKeyForAuthenticated(
	props: UsersCreateGpgKeyForAuthenticatedProps,
) {
	const { body, ...rest } = props;

	const response = await fetch(`/user/gpg_keys`, {
		method: 'POST',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
