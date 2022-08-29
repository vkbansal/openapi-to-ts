/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { WebhookConfigContentType } from '../schemas/WebhookConfigContentType';
import type { WebhookConfigInsecureSsl } from '../schemas/WebhookConfigInsecureSsl';
import type { WebhookConfigSecret } from '../schemas/WebhookConfigSecret';
import type { WebhookConfigUrl } from '../schemas/WebhookConfigUrl';

import { fetcher as _fetcher } from './fetcher';

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

/**
 * Updates the webhook configuration for an organization. To update more information about the webhook, including the `active` state and `events`, use "[Update an organization webhook ](/rest/reference/orgs#update-an-organization-webhook)."
 *
 * Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:write` permission.
 */
export async function orgsUpdateWebhookConfigForOrg(props: OrgsUpdateWebhookConfigForOrgProps) {
	const { org, hook_id, ...rest } = props;

	return _fetcher<unknown, unknown, OrgsUpdateWebhookConfigForOrgRequestBody>({
		path: `/orgs/${org}/hooks/${hook_id}/config`,
		method: 'PATCH',
		...rest,
	});
}
