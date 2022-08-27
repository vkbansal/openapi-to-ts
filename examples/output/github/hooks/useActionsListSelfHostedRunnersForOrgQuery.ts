import { useQuery } from '@tanstack/react-query';

export interface ActionsListSelfHostedRunnersForOrgPathParams {
	org: string;
}

export interface ActionsListSelfHostedRunnersForOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActionsListSelfHostedRunnersForOrgQueryProps
	extends ActionsListSelfHostedRunnersForOrgPathParams {
	queryParams: ActionsListSelfHostedRunnersForOrgQueryParams;
}

export function useActionsListSelfHostedRunnersForOrgQuery(
	props: UseActionsListSelfHostedRunnersForOrgQueryProps,
) {
	const { org, queryParams } = props;

	return useQuery(['actions/list-self-hosted-runners-for-org', org, queryParams]);
}
