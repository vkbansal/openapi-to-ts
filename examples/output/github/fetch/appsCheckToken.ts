/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface AppsCheckTokenPathParams {
	client_id: string;
}

export interface AppsCheckTokenRequestBody {
	/**
	 * The access_token of the OAuth application.
	 */
	access_token: string;
}

export interface AppsCheckTokenProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsCheckTokenPathParams {
	body: AppsCheckTokenRequestBody;
}

/**
 * OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.
 */
export async function appsCheckToken(props: AppsCheckTokenProps) {
	const { client_id, body, ...rest } = props;

	const response = await fetch(`/applications/${client_id}/token`, {
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
