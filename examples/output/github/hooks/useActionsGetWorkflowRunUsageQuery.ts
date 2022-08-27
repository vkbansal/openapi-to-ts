import { useQuery } from '@tanstack/react-query';

export interface ActionsGetWorkflowRunUsagePathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface UseActionsGetWorkflowRunUsageQueryProps
	extends ActionsGetWorkflowRunUsagePathParams {}

export function useActionsGetWorkflowRunUsageQuery(props: UseActionsGetWorkflowRunUsageQueryProps) {
	const { owner, repo, run_id } = props;

	return useQuery(['actions/get-workflow-run-usage', owner, repo, run_id]);
}
