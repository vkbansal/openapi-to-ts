import { useQuery } from '@tanstack/react-query';

export interface ActionsListWorkflowRunsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActionsListWorkflowRunsForRepoQueryParams {
	actor?: string;
	branch?: string;
	event?: string;
	status?:
		| 'action_required'
		| 'cancelled'
		| 'completed'
		| 'failure'
		| 'in_progress'
		| 'neutral'
		| 'queued'
		| 'requested'
		| 'skipped'
		| 'stale'
		| 'success'
		| 'timed_out'
		| 'waiting';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActionsListWorkflowRunsForRepoQueryProps
	extends ActionsListWorkflowRunsForRepoPathParams {
	queryParams: ActionsListWorkflowRunsForRepoQueryParams;
}

export function useActionsListWorkflowRunsForRepoQuery(
	props: UseActionsListWorkflowRunsForRepoQueryProps,
) {
	const { owner, repo, queryParams } = props;

	return useQuery(['actions/list-workflow-runs-for-repo', owner, repo, queryParams]);
}
