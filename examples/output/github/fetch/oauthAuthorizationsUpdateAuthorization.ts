/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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

/**
 * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
 *
 * If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
 *
 * You can only send one of these scope keys at a time.
 * @deprecated
 */
export async function oauthAuthorizationsUpdateAuthorization(
	props: OauthAuthorizationsUpdateAuthorizationProps,
) {
	const { authorization_id, ...rest } = props;

	return _fetcher<unknown, unknown, OauthAuthorizationsUpdateAuthorizationRequestBody>({
		path: `/authorizations/${authorization_id}`,
		method: 'PATCH',
		...rest,
	});
}
