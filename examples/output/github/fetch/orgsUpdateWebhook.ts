export interface OrgsUpdateWebhookPathParams {
	org: string;
	hook_id: number;
}

export interface OrgsUpdateWebhookRequestBody {
	/**
	 * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
	 * @default true
	 */
	active?: boolean;
	/**
	 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/orgs#update-hook-config-params).
	 */
	config?: {
		content_type?: WebhookConfigContentType;
		insecure_ssl?: WebhookConfigInsecureSsl;
		secret?: WebhookConfigSecret;
		url: WebhookConfigUrl;
	};
	/**
	 * Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.
	 * @default ["push"]
	 */
	events?: string[];
	/**
	 * @example "\"web\""
	 */
	name?: string;
}

export interface OrgsUpdateWebhookProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsUpdateWebhookPathParams {
	body: OrgsUpdateWebhookRequestBody;
}

export async function orgsUpdateWebhook(props: OrgsUpdateWebhookProps) {
	const { org, hook_id, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/hooks/${hook_id}`, {
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
