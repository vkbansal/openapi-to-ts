export interface AppsResetTokenPathParams {
	client_id: string;
}

export interface AppsResetTokenRequestBody {
	/**
	 * The access_token of the OAuth application.
	 */
	access_token: string;
}

export interface AppsResetTokenProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsResetTokenPathParams {
	body: AppsResetTokenRequestBody;
}

export async function appsResetToken(props: AppsResetTokenProps) {
	const { client_id, body, ...rest } = props;

	const response = await fetch(`/applications/${client_id}/token`, {
		method: 'PATCH',
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
