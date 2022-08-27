export interface AppsRevokeGrantForApplicationPathParams {
	client_id: string;
	access_token: string;
}

export interface AppsRevokeGrantForApplicationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsRevokeGrantForApplicationPathParams {}

export async function appsRevokeGrantForApplication(props: AppsRevokeGrantForApplicationProps) {
	const { client_id, access_token, ...rest } = props;

	const response = await fetch(`/applications/${client_id}/grants/${access_token}`, {
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
