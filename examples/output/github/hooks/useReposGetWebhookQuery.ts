import { useQuery } from '@tanstack/react-query';

export interface ReposGetWebhookPathParams {
	owner: string;
	repo: string;
	hook_id: number;
}

export interface UseReposGetWebhookQueryProps extends ReposGetWebhookPathParams {}

export function useReposGetWebhookQuery(props: UseReposGetWebhookQueryProps) {
	const { owner, repo, hook_id } = props;

	return useQuery(['repos/get-webhook', owner, repo, hook_id]);
}
