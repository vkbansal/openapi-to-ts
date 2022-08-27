import { useQuery } from '@tanstack/react-query';

export interface ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams {
	org: string;
	runner_group_id: number;
}

export interface ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams {
	/**
	 * @default 1
	 */
	page?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
}

export interface UseActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryProps
	extends ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams {
	queryParams: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams;
}

export function useActionsListRepoAccessToSelfHostedRunnerGroupInOrgQuery(
	props: UseActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryProps,
) {
	const { org, runner_group_id, queryParams } = props;

	return useQuery([
		'actions/list-repo-access-to-self-hosted-runner-group-in-org',
		org,
		runner_group_id,
		queryParams,
	]);
}
