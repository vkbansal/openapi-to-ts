/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActionsEnableWorkflowPathParams {
	owner: string;
	repo: string;
	workflow_id: number & string;
}

export interface ActionsEnableWorkflowProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsEnableWorkflowPathParams {}

/**
 * Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
 */
export async function actionsEnableWorkflow(props: ActionsEnableWorkflowProps) {
	const { owner, repo, workflow_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/actions/workflows/${workflow_id}/enable`,
		method: 'PUT',
		...rest,
	});
}
