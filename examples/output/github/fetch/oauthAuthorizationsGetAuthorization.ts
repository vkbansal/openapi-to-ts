/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface OauthAuthorizationsGetAuthorizationPathParams {
	authorization_id: number;
}

export interface OauthAuthorizationsGetAuthorizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OauthAuthorizationsGetAuthorizationPathParams {}

/**
 * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
 * @deprecated
 */
export async function oauthAuthorizationsGetAuthorization(
	props: OauthAuthorizationsGetAuthorizationProps,
) {
	const { authorization_id, ...rest } = props;

	const response = await fetch(`/authorizations/${authorization_id}`, {
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
