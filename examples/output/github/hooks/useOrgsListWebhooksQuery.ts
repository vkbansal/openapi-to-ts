import { useQuery } from '@tanstack/react-query';

export interface OrgsListWebhooksPathParams {
	org: string;
}

export interface OrgsListWebhooksQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseOrgsListWebhooksQueryProps extends OrgsListWebhooksPathParams {
	queryParams: OrgsListWebhooksQueryParams;
}

export function useOrgsListWebhooksQuery(props: UseOrgsListWebhooksQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['orgs/list-webhooks', org, queryParams]);
}
