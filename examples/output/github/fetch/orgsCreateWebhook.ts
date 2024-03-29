/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { WebhookConfigContentType } from '../schemas/WebhookConfigContentType';
import type { WebhookConfigInsecureSsl } from '../schemas/WebhookConfigInsecureSsl';
import type { WebhookConfigSecret } from '../schemas/WebhookConfigSecret';
import type { WebhookConfigUrl } from '../schemas/WebhookConfigUrl';

import { fetcher as _fetcher } from './fetcher';

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

/**
 * Here's how you can create a hook that posts payloads in JSON format:
 */
export async function orgsCreateWebhook(props: OrgsCreateWebhookProps) {
	const { org, ...rest } = props;

	return _fetcher<unknown, unknown, OrgsCreateWebhookRequestBody>({
		path: `/orgs/${org}/hooks`,
		method: 'POST',
		...rest,
	});
}
