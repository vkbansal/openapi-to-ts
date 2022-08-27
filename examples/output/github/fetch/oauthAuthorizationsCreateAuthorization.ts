export interface OauthAuthorizationsCreateAuthorizationRequestBody {
	/**
	 * The OAuth app client key for which to create the token.
	 */
	client_id?: string;
	/**
	 * The OAuth app client secret for which to create the token.
	 */
	client_secret?: string;
	/**
	 * A unique string to distinguish an authorization from others created for the same client ID and user.
	 */
	fingerprint?: string;
	/**
	 * A note to remind you what the OAuth token is for.
	 * @example "Update all gems"
	 */
	note?: string;
	/**
	 * A URL to remind you what app the OAuth token is for.
	 */
	note_url?: string;
	/**
	 * A list of scopes that this authorization is in.
	 * @example ["public_repo","user"]
	 */
	scopes?: string[] | null;
}

export interface OauthAuthorizationsCreateAuthorizationProps
	extends Omit<RequestInit, 'method' | 'body'> {
	body: OauthAuthorizationsCreateAuthorizationRequestBody;
}

export async function oauthAuthorizationsCreateAuthorization(
	props: OauthAuthorizationsCreateAuthorizationProps,
) {
	const { body, ...rest } = props;

	const response = await fetch(`/authorizations`, {
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
