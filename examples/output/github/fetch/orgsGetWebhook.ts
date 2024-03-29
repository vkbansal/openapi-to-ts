/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface OrgsGetWebhookPathParams {
	org: string;
	hook_id: number;
}

export interface OrgsGetWebhookProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsGetWebhookPathParams {}

/**
 * Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)."
 */
export async function orgsGetWebhook(props: OrgsGetWebhookProps) {
	const { org, hook_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/orgs/${org}/hooks/${hook_id}`,
		method: 'GET',
		...rest,
	});
}
