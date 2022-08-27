export interface ReposUpdateWebhookPathParams {
	owner: string;
	repo: string;
	hook_id: number;
}

export interface ReposUpdateWebhookRequestBody {
	/**
	 * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
	 * @default true
	 */
	active?: boolean;
	/**
	 * Determines a list of events to be added to the list of events that the Hook triggers for.
	 */
	add_events?: string[];
	/**
	 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/repos#create-hook-config-params).
	 */
	config?: {
		/**
		 * @example "\"bar@example.com\""
		 */
		address?: string;
		content_type?: WebhookConfigContentType;
		insecure_ssl?: WebhookConfigInsecureSsl;
		/**
		 * @example "\"The Serious Room\""
		 */
		room?: string;
		secret?: WebhookConfigSecret;
		url: WebhookConfigUrl;
	};
	/**
	 * Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. This replaces the entire array of events.
	 * @default ["push"]
	 */
	events?: string[];
	/**
	 * Determines a list of events to be removed from the list of events that the Hook triggers for.
	 */
	remove_events?: string[];
}

export interface ReposUpdateWebhookProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposUpdateWebhookPathParams {
	body: ReposUpdateWebhookRequestBody;
}

export async function reposUpdateWebhook(props: ReposUpdateWebhookProps) {
	const { owner, repo, hook_id, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/hooks/${hook_id}`, {
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
