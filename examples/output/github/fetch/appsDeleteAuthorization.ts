export interface AppsDeleteAuthorizationPathParams {
	client_id: string;
}

export interface AppsDeleteAuthorizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsDeleteAuthorizationPathParams {}

export async function appsDeleteAuthorization(props: AppsDeleteAuthorizationProps) {
	const { client_id, ...rest } = props;

	const response = await fetch(`/applications/${client_id}/grant`, {
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
