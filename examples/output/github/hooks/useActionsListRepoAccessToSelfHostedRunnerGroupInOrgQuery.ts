/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams {
	org: string;
	runner_group_id: number;
}

export interface ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams {
	page?: number;
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
