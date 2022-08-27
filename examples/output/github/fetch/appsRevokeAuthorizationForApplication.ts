export interface AppsRevokeAuthorizationForApplicationPathParams {
	client_id: string;
	access_token: string;
}

export interface AppsRevokeAuthorizationForApplicationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsRevokeAuthorizationForApplicationPathParams {}

export async function appsRevokeAuthorizationForApplication(
	props: AppsRevokeAuthorizationForApplicationProps,
) {
	const { client_id, access_token, ...rest } = props;

	const response = await fetch(`/applications/${client_id}/tokens/${access_token}`, {
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
