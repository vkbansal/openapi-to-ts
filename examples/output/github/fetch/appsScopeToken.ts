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
