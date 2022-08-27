export interface UsersUpdateAuthenticatedRequestBody {
	/**
	 * The new short biography of the user.
	 */
	bio?: string;
	/**
	 * The new blog URL of the user.
	 * @example "blog.example.com"
	 */
	blog?: string;
	/**
	 * The new company of the user.
	 * @example "Acme corporation"
	 */
	company?: string;
	/**
	 * The publicly visible email address of the user.
	 * @example "omar@example.com"
	 */
	email?: string;
	/**
	 * The new hiring availability of the user.
	 */
	hireable?: boolean;
	/**
	 * The new location of the user.
	 * @example "Berlin, Germany"
	 */
	location?: string;
	/**
	 * The new name of the user.
	 * @example "Omar Jahandar"
	 */
	name?: string;
	/**
	 * The new Twitter username of the user.
	 * @example "therealomarj"
	 */
	twitter_username?: string | null;
}

export interface UsersUpdateAuthenticatedProps extends Omit<RequestInit, 'method' | 'body'> {
	body: UsersUpdateAuthenticatedRequestBody;
}

export async function usersUpdateAuthenticated(props: UsersUpdateAuthenticatedProps) {
	const { body, ...rest } = props;

	const response = await fetch(`/user`, {
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
