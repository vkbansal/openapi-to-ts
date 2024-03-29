/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseActionsGetWorkflowQueryPathParams {
	owner: string;
	repo: string;
	workflow_id: number & string;
}

export interface UseActionsGetWorkflowQueryProps extends UseActionsGetWorkflowQueryPathParams {}

/**
 * Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 */

export function useActionsGetWorkflowQuery(props: UseActionsGetWorkflowQueryProps) {
	const { owner, repo, workflow_id } = props;

	return useQuery(['actions/get-workflow', owner, repo, workflow_id]);
}
