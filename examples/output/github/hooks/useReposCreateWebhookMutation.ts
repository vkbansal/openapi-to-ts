/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

import type { WebhookConfigContentType } from '../schemas/WebhookConfigContentType';
import type { WebhookConfigInsecureSsl } from '../schemas/WebhookConfigInsecureSsl';
import type { WebhookConfigSecret } from '../schemas/WebhookConfigSecret';
import type { WebhookConfigUrl } from '../schemas/WebhookConfigUrl';

export interface UseReposCreateWebhookMutationPathParams {
	owner: string;
	repo: string;
}

export interface UseReposCreateWebhookMutationRequestBody {
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

export interface UseReposCreateWebhookMutationProps
	extends UseReposCreateWebhookMutationPathParams {
	body: UseReposCreateWebhookMutationRequestBody;
}

/**
 * Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
 * share the same `config` as long as those webhooks do not have any `events` that overlap.
 */

export function useReposCreateWebhookMutation(props: UseReposCreateWebhookMutationProps) {
	return useMutation(() => Promise.resolve());
}
