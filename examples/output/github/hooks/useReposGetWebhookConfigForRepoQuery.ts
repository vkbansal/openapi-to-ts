import { useQuery } from '@tanstack/react-query';

export interface ReposGetWebhookConfigForRepoPathParams {
	owner: string;
	repo: string;
	hook_id: number;
}

export interface UseReposGetWebhookConfigForRepoQueryProps
	extends ReposGetWebhookConfigForRepoPathParams {}

export function useReposGetWebhookConfigForRepoQuery(
	props: UseReposGetWebhookConfigForRepoQueryProps,
) {
	const { owner, repo, hook_id } = props;

	return useQuery(['repos/get-webhook-config-for-repo', owner, repo, hook_id]);
}
