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
