export interface OauthAuthorizationsUpdateAuthorizationPathParams {
	authorization_id: number;
}

export interface OauthAuthorizationsUpdateAuthorizationRequestBody {
	/**
	 * A list of scopes to add to this authorization.
	 */
	add_scopes?: string[];
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
	 * A list of scopes to remove from this authorization.
	 */
	remove_scopes?: string[];
	/**
	 * A list of scopes that this authorization is in.
	 * @example ["public_repo","user"]
	 */
	scopes?: string[] | null;
}

export interface OauthAuthorizationsUpdateAuthorizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OauthAuthorizationsUpdateAuthorizationPathParams {
	body: OauthAuthorizationsUpdateAuthorizationRequestBody;
}

export async function oauthAuthorizationsUpdateAuthorization(
	props: OauthAuthorizationsUpdateAuthorizationProps,
) {
	const { authorization_id, body, ...rest } = props;

	const response = await fetch(`/authorizations/${authorization_id}`, {
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
