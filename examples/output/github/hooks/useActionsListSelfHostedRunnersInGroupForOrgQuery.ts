import { useQuery } from '@tanstack/react-query';

export interface ActionsListSelfHostedRunnersInGroupForOrgPathParams {
	org: string;
	runner_group_id: number;
}

export interface ActionsListSelfHostedRunnersInGroupForOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActionsListSelfHostedRunnersInGroupForOrgQueryProps
	extends ActionsListSelfHostedRunnersInGroupForOrgPathParams {
	queryParams: ActionsListSelfHostedRunnersInGroupForOrgQueryParams;
}

export function useActionsListSelfHostedRunnersInGroupForOrgQuery(
	props: UseActionsListSelfHostedRunnersInGroupForOrgQueryProps,
) {
	const { org, runner_group_id, queryParams } = props;

	return useQuery([
		'actions/list-self-hosted-runners-in-group-for-org',
		org,
		runner_group_id,
		queryParams,
	]);
}
