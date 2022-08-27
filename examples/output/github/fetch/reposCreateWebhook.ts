export interface ReposCreateWebhookPathParams {
	owner: string;
	repo: string;
}

export interface ReposCreateWebhookRequestBody {
	/**
	 * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
	 * @default true
	 */
	active?: boolean;
	/**
	 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/repos#create-hook-config-params).
	 */
	config: {
		content_type?: WebhookConfigContentType;
		/**
		 * @example "\"sha256\""
		 */
		digest?: string;
		insecure_ssl?: WebhookConfigInsecureSsl;
		secret?: WebhookConfigSecret;
		/**
		 * @example "\"abc\""
		 */
		token?: string;
		url: WebhookConfigUrl;
	};
	/**
	 * Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.
	 * @default ["push"]
	 */
	events?: string[];
	/**
	 * Use `web` to create a webhook. Default: `web`. This parameter only accepts the value `web`.
	 */
	name?: string;
}

export interface ReposCreateWebhookProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateWebhookPathParams {
	body: ReposCreateWebhookRequestBody;
}

export async function reposCreateWebhook(props: ReposCreateWebhookProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/hooks`, {
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
