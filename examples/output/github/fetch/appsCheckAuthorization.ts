export interface AppsCheckAuthorizationPathParams {
	client_id: string;
	access_token: string;
}

export interface AppsCheckAuthorizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsCheckAuthorizationPathParams {}

export async function appsCheckAuthorization(props: AppsCheckAuthorizationProps) {
	const { client_id, access_token, ...rest } = props;

	const response = await fetch(`/applications/${client_id}/tokens/${access_token}`, {
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
