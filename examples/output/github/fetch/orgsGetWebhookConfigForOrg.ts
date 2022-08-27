export interface OrgsGetWebhookConfigForOrgPathParams {
	org: string;
	hook_id: number;
}

export interface OrgsGetWebhookConfigForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsGetWebhookConfigForOrgPathParams {}

export async function orgsGetWebhookConfigForOrg(props: OrgsGetWebhookConfigForOrgProps) {
	const { org, hook_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/hooks/${hook_id}/config`, {
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
