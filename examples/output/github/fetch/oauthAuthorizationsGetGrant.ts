export interface OauthAuthorizationsGetGrantPathParams {
	grant_id: number;
}

export interface OauthAuthorizationsGetGrantProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OauthAuthorizationsGetGrantPathParams {}

export async function oauthAuthorizationsGetGrant(props: OauthAuthorizationsGetGrantProps) {
	const { grant_id, ...rest } = props;

	const response = await fetch(`/applications/grants/${grant_id}`, {
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
