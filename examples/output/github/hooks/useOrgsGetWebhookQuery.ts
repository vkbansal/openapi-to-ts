/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseOrgsGetWebhookQueryPathParams {
	org: string;
	hook_id: number;
}

export interface UseOrgsGetWebhookQueryProps extends UseOrgsGetWebhookQueryPathParams {}

/**
 * Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)."
 */

export function useOrgsGetWebhookQuery(props: UseOrgsGetWebhookQueryProps) {
	const { org, hook_id } = props;

	return useQuery(['orgs/get-webhook', org, hook_id]);
}
