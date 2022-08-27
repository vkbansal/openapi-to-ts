export interface AppsResetAuthorizationPathParams {
	client_id: string;
	access_token: string;
}

export interface AppsResetAuthorizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsResetAuthorizationPathParams {}

export async function appsResetAuthorization(props: AppsResetAuthorizationProps) {
	const { client_id, access_token, ...rest } = props;

	const response = await fetch(`/applications/${client_id}/tokens/${access_token}`, {
		method: 'POST',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
