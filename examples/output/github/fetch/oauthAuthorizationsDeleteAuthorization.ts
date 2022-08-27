export interface OauthAuthorizationsDeleteAuthorizationPathParams {
	authorization_id: number;
}

export interface OauthAuthorizationsDeleteAuthorizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OauthAuthorizationsDeleteAuthorizationPathParams {}

export async function oauthAuthorizationsDeleteAuthorization(
	props: OauthAuthorizationsDeleteAuthorizationProps,
) {
	const { authorization_id, ...rest } = props;

	const response = await fetch(`/authorizations/${authorization_id}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
