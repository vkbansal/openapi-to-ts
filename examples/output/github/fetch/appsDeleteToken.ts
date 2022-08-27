export interface AppsDeleteTokenPathParams {
	client_id: string;
}

export interface AppsDeleteTokenProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsDeleteTokenPathParams {}

export async function appsDeleteToken(props: AppsDeleteTokenProps) {
	const { client_id, ...rest } = props;

	const response = await fetch(`/applications/${client_id}/token`, {
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
