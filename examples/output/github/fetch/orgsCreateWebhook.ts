export interface OrgsCreateWebhookPathParams {
	org: string;
}

export interface OrgsCreateWebhookRequestBody {
	/**
	 * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
	 * @default true
	 */
	active?: boolean;
	/**
	 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/orgs#create-hook-config-params).
	 */
	config: {
		content_type?: WebhookConfigContentType;
		insecure_ssl?: WebhookConfigInsecureSsl;
		/**
		 * @example "\"password\""
		 */
		password?: string;
		secret?: WebhookConfigSecret;
		url: WebhookConfigUrl;
		/**
		 * @example "\"kdaigle\""
		 */
		username?: string;
	};
	/**
	 * Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.
	 * @default ["push"]
	 */
	events?: string[];
	/**
	 * Must be passed as "web".
	 */
	name: string;
}

export interface OrgsCreateWebhookProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsCreateWebhookPathParams {
	body: OrgsCreateWebhookRequestBody;
}

export async function orgsCreateWebhook(props: OrgsCreateWebhookProps) {
	const { org, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/hooks`, {
		method: 'POST',
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
