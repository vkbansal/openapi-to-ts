export interface OrgsPingWebhookPathParams {
	org: string;
	hook_id: number;
}

export interface OrgsPingWebhookProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsPingWebhookPathParams {}

export async function orgsPingWebhook(props: OrgsPingWebhookProps) {
	const { org, hook_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/hooks/${hook_id}/pings`, {
		method: 'POST',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
