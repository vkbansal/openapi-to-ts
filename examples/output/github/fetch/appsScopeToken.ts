/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { AppPermissions } from '../schemas/AppPermissions';

export interface AppsScopeTokenPathParams {
	client_id: string;
}

export interface AppsScopeTokenRequestBody {
	/**
	 * **Required.** The OAuth access token used to authenticate to the GitHub API.
	 * @example "e72e16c7e42f292c6912e7710c838347ae178b4a"
	 */
	access_token: string;
	permissions?: AppPermissions;
	/**
	 * The list of repository names to scope the user-to-server access token to. `repositories` may not be specified if `repository_ids` is specified.
	 */
	repositories?: string[];
	/**
	 * The list of repository IDs to scope the user-to-server access token to. `repository_ids` may not be specified if `repositories` is specified.
	 * @example [1]
	 */
	repository_ids?: number[];
	/**
	 * The name of the user or organization to scope the user-to-server access token to. **Required** unless `target_id` is specified.
	 * @example "octocat"
	 */
	target?: string;
	/**
	 * The ID of the user or organization to scope the user-to-server access token to. **Required** unless `target` is specified.
	 * @example 1
	 */
	target_id?: number;
}

export interface AppsScopeTokenProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsScopeTokenPathParams {
	body: AppsScopeTokenRequestBody;
}

/**
 * Exchanges a non-repository scoped user-to-server OAuth access token for a repository scoped user-to-server OAuth access token. You can specify which repositories the token can access and which permissions are granted to the token. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
 */
export async function appsScopeToken(props: AppsScopeTokenProps) {
	const { client_id, body, ...rest } = props;

	const response = await fetch(`/applications/${client_id}/token/scoped`, {
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
