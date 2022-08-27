import { useQuery } from '@tanstack/react-query';
export interface UseAppsGetWebhookConfigForAppQueryProps {}

export function useAppsGetWebhookConfigForAppQuery(props: UseAppsGetWebhookConfigForAppQueryProps) {
	const {} = props;

	return useQuery(['apps/get-webhook-config-for-app']);
}
