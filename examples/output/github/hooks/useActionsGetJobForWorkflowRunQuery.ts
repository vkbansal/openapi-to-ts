import { useQuery } from '@tanstack/react-query';

export interface ActionsGetJobForWorkflowRunPathParams {
	owner: string;
	repo: string;
	job_id: number;
}

export interface UseActionsGetJobForWorkflowRunQueryProps
	extends ActionsGetJobForWorkflowRunPathParams {}

export function useActionsGetJobForWorkflowRunQuery(
	props: UseActionsGetJobForWorkflowRunQueryProps,
) {
	const { owner, repo, job_id } = props;

	return useQuery(['actions/get-job-for-workflow-run', owner, repo, job_id]);
}
