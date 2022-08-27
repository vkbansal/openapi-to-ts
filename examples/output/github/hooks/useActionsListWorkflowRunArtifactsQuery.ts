import { useQuery } from '@tanstack/react-query';

export interface ActionsListWorkflowRunArtifactsPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsListWorkflowRunArtifactsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActionsListWorkflowRunArtifactsQueryProps
	extends ActionsListWorkflowRunArtifactsPathParams {
	queryParams: ActionsListWorkflowRunArtifactsQueryParams;
}

export function useActionsListWorkflowRunArtifactsQuery(
	props: UseActionsListWorkflowRunArtifactsQueryProps,
) {
	const { owner, repo, run_id, queryParams } = props;

	return useQuery(['actions/list-workflow-run-artifacts', owner, repo, run_id, queryParams]);
}
