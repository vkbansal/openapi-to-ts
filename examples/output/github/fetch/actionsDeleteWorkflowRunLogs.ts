/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActionsDeleteWorkflowRunLogsPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsDeleteWorkflowRunLogsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDeleteWorkflowRunLogsPathParams {}

/**
 * Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
 */
export async function actionsDeleteWorkflowRunLogs(props: ActionsDeleteWorkflowRunLogsProps) {
	const { owner, repo, run_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/actions/runs/${run_id}/logs`,
		method: 'DELETE',
		...rest,
	});
}
