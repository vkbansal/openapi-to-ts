/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { WebhookConfigContentType } from '../schemas/WebhookConfigContentType';
import type { WebhookConfigInsecureSsl } from '../schemas/WebhookConfigInsecureSsl';
import type { WebhookConfigSecret } from '../schemas/WebhookConfigSecret';
import type { WebhookConfigUrl } from '../schemas/WebhookConfigUrl';

import { fetcher as _fetcher } from './fetcher';

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

/**
 * Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization)."
 */
export async function orgsUpdateWebhook(props: OrgsUpdateWebhookProps) {
	const { org, hook_id, ...rest } = props;

	return _fetcher<unknown, unknown, OrgsUpdateWebhookRequestBody>({
		path: `/orgs/${org}/hooks/${hook_id}`,
		method: 'PATCH',
		...rest,
	});
}
