import { useQuery } from '@tanstack/react-query';

export interface ActionsGetSelfHostedRunnerForOrgPathParams {
	org: string;
	runner_id: number;
}

export interface UseActionsGetSelfHostedRunnerForOrgQueryProps
	extends ActionsGetSelfHostedRunnerForOrgPathParams {}

export function useActionsGetSelfHostedRunnerForOrgQuery(
	props: UseActionsGetSelfHostedRunnerForOrgQueryProps,
) {
	const { org, runner_id } = props;

	return useQuery(['actions/get-self-hosted-runner-for-org', org, runner_id]);
}
