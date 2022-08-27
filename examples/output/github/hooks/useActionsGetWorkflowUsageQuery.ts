import { useQuery } from '@tanstack/react-query';

export interface ActionsGetWorkflowUsagePathParams {
	owner: string;
	repo: string;
	workflow_id: number & string;
}

export interface UseActionsGetWorkflowUsageQueryProps extends ActionsGetWorkflowUsagePathParams {}

export function useActionsGetWorkflowUsageQuery(props: UseActionsGetWorkflowUsageQueryProps) {
	const { owner, repo, workflow_id } = props;

	return useQuery(['actions/get-workflow-usage', owner, repo, workflow_id]);
}
