import { useQuery } from '@tanstack/react-query';

export interface OrgsGetWebhookConfigForOrgPathParams {
	org: string;
	hook_id: number;
}

export interface UseOrgsGetWebhookConfigForOrgQueryProps
	extends OrgsGetWebhookConfigForOrgPathParams {}

export function useOrgsGetWebhookConfigForOrgQuery(props: UseOrgsGetWebhookConfigForOrgQueryProps) {
	const { org, hook_id } = props;

	return useQuery(['orgs/get-webhook-config-for-org', org, hook_id]);
}
