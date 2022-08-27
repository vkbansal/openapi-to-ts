import { useQuery } from '@tanstack/react-query';

export interface ActionsListJobsForWorkflowRunPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsListJobsForWorkflowRunQueryParams {
	/**
	 * @default "latest"
	 */
	filter?: 'all' | 'latest';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActionsListJobsForWorkflowRunQueryProps
	extends ActionsListJobsForWorkflowRunPathParams {
	queryParams: ActionsListJobsForWorkflowRunQueryParams;
}

export function useActionsListJobsForWorkflowRunQuery(
	props: UseActionsListJobsForWorkflowRunQueryProps,
) {
	const { owner, repo, run_id, queryParams } = props;

	return useQuery(['actions/list-jobs-for-workflow-run', owner, repo, run_id, queryParams]);
}
