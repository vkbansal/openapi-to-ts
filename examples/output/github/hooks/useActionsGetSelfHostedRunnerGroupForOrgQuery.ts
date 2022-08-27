import { useQuery } from '@tanstack/react-query';

export interface ActionsGetSelfHostedRunnerGroupForOrgPathParams {
	org: string;
	runner_group_id: number;
}

export interface UseActionsGetSelfHostedRunnerGroupForOrgQueryProps
	extends ActionsGetSelfHostedRunnerGroupForOrgPathParams {}

export function useActionsGetSelfHostedRunnerGroupForOrgQuery(
	props: UseActionsGetSelfHostedRunnerGroupForOrgQueryProps,
) {
	const { org, runner_group_id } = props;

	return useQuery(['actions/get-self-hosted-runner-group-for-org', org, runner_group_id]);
}
