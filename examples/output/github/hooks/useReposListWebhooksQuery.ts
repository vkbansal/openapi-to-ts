import { useQuery } from '@tanstack/react-query';

export interface ReposListWebhooksPathParams {
	owner: string;
	repo: string;
}

export interface ReposListWebhooksQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListWebhooksQueryProps extends ReposListWebhooksPathParams {
	queryParams: ReposListWebhooksQueryParams;
}

export function useReposListWebhooksQuery(props: UseReposListWebhooksQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-webhooks', owner, repo, queryParams]);
}
