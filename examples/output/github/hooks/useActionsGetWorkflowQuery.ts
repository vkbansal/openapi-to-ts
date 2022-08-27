import { useQuery } from '@tanstack/react-query';

export interface ActionsGetWorkflowPathParams {
	owner: string;
	repo: string;
	workflow_id: number & string;
}

export interface UseActionsGetWorkflowQueryProps extends ActionsGetWorkflowPathParams {}

export function useActionsGetWorkflowQuery(props: UseActionsGetWorkflowQueryProps) {
	const { owner, repo, workflow_id } = props;

	return useQuery(['actions/get-workflow', owner, repo, workflow_id]);
}
