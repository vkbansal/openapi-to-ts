export interface OauthAuthorizationsDeleteGrantPathParams {
	grant_id: number;
}

export interface OauthAuthorizationsDeleteGrantProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OauthAuthorizationsDeleteGrantPathParams {}

export async function oauthAuthorizationsDeleteGrant(props: OauthAuthorizationsDeleteGrantProps) {
	const { grant_id, ...rest } = props;

	const response = await fetch(`/applications/grants/${grant_id}`, {
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
