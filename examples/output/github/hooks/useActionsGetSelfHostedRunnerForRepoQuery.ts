import { useQuery } from '@tanstack/react-query';

export interface ActionsGetSelfHostedRunnerForRepoPathParams {
	owner: string;
	repo: string;
	runner_id: number;
}

export interface UseActionsGetSelfHostedRunnerForRepoQueryProps
	extends ActionsGetSelfHostedRunnerForRepoPathParams {}

export function useActionsGetSelfHostedRunnerForRepoQuery(
	props: UseActionsGetSelfHostedRunnerForRepoQueryProps,
) {
	const { owner, repo, runner_id } = props;

	return useQuery(['actions/get-self-hosted-runner-for-repo', owner, repo, runner_id]);
}
