export interface OrgsListWebhooksQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface OrgsListWebhooksPathParams {
	org: string;
}

export interface OrgsListWebhooksProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsListWebhooksPathParams {
	queryParams: OrgsListWebhooksQueryParams;
}

export async function orgsListWebhooks(props: OrgsListWebhooksProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/hooks`, {
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
