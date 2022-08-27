export interface OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams {
	client_id: string;
	fingerprint: string;
}

export interface OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody {
	/**
	 * The OAuth app client secret for which to create the token.
	 */
	client_secret: string;
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

export interface OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams {
	body: OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody;
}

export async function oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint(
	props: OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintProps,
) {
	const { client_id, fingerprint, body, ...rest } = props;

	const response = await fetch(`/authorizations/clients/${client_id}/${fingerprint}`, {
		method: 'PUT',
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
