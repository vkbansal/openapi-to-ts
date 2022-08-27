import { useQuery } from '@tanstack/react-query';

export interface ActionsListRunnerApplicationsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface UseActionsListRunnerApplicationsForRepoQueryProps
	extends ActionsListRunnerApplicationsForRepoPathParams {}

export function useActionsListRunnerApplicationsForRepoQuery(
	props: UseActionsListRunnerApplicationsForRepoQueryProps,
) {
	const { owner, repo } = props;

	return useQuery(['actions/list-runner-applications-for-repo', owner, repo]);
}
