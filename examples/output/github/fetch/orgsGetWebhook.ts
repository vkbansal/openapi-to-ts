export interface OrgsGetWebhookPathParams {
	org: string;
	hook_id: number;
}

export interface OrgsGetWebhookProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsGetWebhookPathParams {}

export async function orgsGetWebhook(props: OrgsGetWebhookProps) {
	const { org, hook_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/hooks/${hook_id}`, {
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
