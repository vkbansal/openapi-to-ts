import { useQuery } from '@tanstack/react-query';

export interface ActionsGetWorkflowRunPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface UseActionsGetWorkflowRunQueryProps extends ActionsGetWorkflowRunPathParams {}

export function useActionsGetWorkflowRunQuery(props: UseActionsGetWorkflowRunQueryProps) {
	const { owner, repo, run_id } = props;

	return useQuery(['actions/get-workflow-run', owner, repo, run_id]);
}
