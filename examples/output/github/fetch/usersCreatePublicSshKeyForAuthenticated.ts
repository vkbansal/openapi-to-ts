export interface UsersCreatePublicSshKeyForAuthenticatedRequestBody {
	/**
	 * The public SSH key to add to your GitHub account.
	 */
	key: string;
	/**
	 * A descriptive name for the new key.
	 * @example "Personal MacBook Air"
	 */
	title?: string;
}

export interface UsersCreatePublicSshKeyForAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'> {
	body: UsersCreatePublicSshKeyForAuthenticatedRequestBody;
}

export async function usersCreatePublicSshKeyForAuthenticated(
	props: UsersCreatePublicSshKeyForAuthenticatedProps,
) {
	const { body, ...rest } = props;

	const response = await fetch(`/user/keys`, {
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
