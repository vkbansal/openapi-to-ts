export interface UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody {
	/**
	 * An email address associated with the GitHub user account to manage.
	 * @example "org@example.com"
	 */
	email: string;
	/**
	 * Denotes whether an email is publically visible.
	 */
	visibility: 'private' | 'public';
}

export interface UsersSetPrimaryEmailVisibilityForAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'> {
	body: UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody;
}

export async function usersSetPrimaryEmailVisibilityForAuthenticated(
	props: UsersSetPrimaryEmailVisibilityForAuthenticatedProps,
) {
	const { body, ...rest } = props;

	const response = await fetch(`/user/email/visibility`, {
		method: 'PATCH',
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
