import { useQuery } from '@tanstack/react-query';

export interface ActionsListWorkflowRunsPathParams {
	owner: string;
	repo: string;
	workflow_id: number & string;
}

export interface ActionsListWorkflowRunsQueryParams {
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

export interface UseActionsListWorkflowRunsQueryProps extends ActionsListWorkflowRunsPathParams {
	queryParams: ActionsListWorkflowRunsQueryParams;
}

export function useActionsListWorkflowRunsQuery(props: UseActionsListWorkflowRunsQueryProps) {
	const { owner, repo, workflow_id, queryParams } = props;

	return useQuery(['actions/list-workflow-runs', owner, repo, workflow_id, queryParams]);
}
