/**
 * @example {"content_type":"json","insecure_ssl":"0","secret":"********","url":"https://example.com/webhook"}
 */
export interface AppsUpdateWebhookConfigForAppRequestBody {
	content_type?: WebhookConfigContentType;
	insecure_ssl?: WebhookConfigInsecureSsl;
	secret?: WebhookConfigSecret;
	url?: WebhookConfigUrl;
}

export interface AppsUpdateWebhookConfigForAppProps extends Omit<RequestInit, 'method' | 'body'> {
	body: AppsUpdateWebhookConfigForAppRequestBody;
}

export async function appsUpdateWebhookConfigForApp(props: AppsUpdateWebhookConfigForAppProps) {
	const { body, ...rest } = props;

	const response = await fetch(`/app/hook/config`, {
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
