import { useQuery } from '@tanstack/react-query';

export interface OrgsGetWebhookPathParams {
	org: string;
	hook_id: number;
}

export interface UseOrgsGetWebhookQueryProps extends OrgsGetWebhookPathParams {}

export function useOrgsGetWebhookQuery(props: UseOrgsGetWebhookQueryProps) {
	const { org, hook_id } = props;

	return useQuery(['orgs/get-webhook', org, hook_id]);
}
