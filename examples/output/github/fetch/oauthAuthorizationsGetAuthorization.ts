export interface OauthAuthorizationsGetAuthorizationPathParams {
	authorization_id: number;
}

export interface OauthAuthorizationsGetAuthorizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OauthAuthorizationsGetAuthorizationPathParams {}

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
