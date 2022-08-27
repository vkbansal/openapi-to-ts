/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ActionsListWorkflowRunArtifactsPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsListWorkflowRunArtifactsQueryParams {
	per_page?: number;
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