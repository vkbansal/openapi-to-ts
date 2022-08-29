/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActionsGetWorkflowPathParams {
	owner: string;
	repo: string;
	workflow_id: number & string;
}

export interface ActionsGetWorkflowProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetWorkflowPathParams {}

/**
 * Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 */
export async function actionsGetWorkflow(props: ActionsGetWorkflowProps) {
	const { owner, repo, workflow_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/actions/workflows/${workflow_id}`,
		method: 'GET',
		...rest,
	});
}
