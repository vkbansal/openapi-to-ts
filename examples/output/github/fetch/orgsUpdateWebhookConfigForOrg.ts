export interface OrgsUpdateWebhookConfigForOrgPathParams {
	org: string;
	hook_id: number;
}

/**
 * @example {"content_type":"json","insecure_ssl":"0","secret":"********","url":"https://example.com/webhook"}
 */
export interface OrgsUpdateWebhookConfigForOrgRequestBody {
	content_type?: WebhookConfigContentType;
	insecure_ssl?: WebhookConfigInsecureSsl;
	secret?: WebhookConfigSecret;
	url?: WebhookConfigUrl;
}

export interface OrgsUpdateWebhookConfigForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsUpdateWebhookConfigForOrgPathParams {
	body: OrgsUpdateWebhookConfigForOrgRequestBody;
}

export async function orgsUpdateWebhookConfigForOrg(props: OrgsUpdateWebhookConfigForOrgProps) {
	const { org, hook_id, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/hooks/${hook_id}/config`, {
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
