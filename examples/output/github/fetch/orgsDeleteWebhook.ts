export interface OrgsDeleteWebhookPathParams {
	org: string;
	hook_id: number;
}

export interface OrgsDeleteWebhookProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsDeleteWebhookPathParams {}

export async function orgsDeleteWebhook(props: OrgsDeleteWebhookProps) {
	const { org, hook_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/hooks/${hook_id}`, {
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
