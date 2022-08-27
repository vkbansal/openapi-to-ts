import { useQuery } from '@tanstack/react-query';

export interface ActionsListSelfHostedRunnerGroupsForOrgPathParams {
	org: string;
}

export interface ActionsListSelfHostedRunnerGroupsForOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActionsListSelfHostedRunnerGroupsForOrgQueryProps
	extends ActionsListSelfHostedRunnerGroupsForOrgPathParams {
	queryParams: ActionsListSelfHostedRunnerGroupsForOrgQueryParams;
}

export function useActionsListSelfHostedRunnerGroupsForOrgQuery(
	props: UseActionsListSelfHostedRunnerGroupsForOrgQueryProps,
) {
	const { org, queryParams } = props;

	return useQuery(['actions/list-self-hosted-runner-groups-for-org', org, queryParams]);
}
