/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActionsListWorkflowRunsQueryParams {
	actor?: string;
	branch?: string;
	event?: string;
	status?:
		| 'action_required'
		| 'cancelled'
		| 'completed'
		| 'failure'
		| 'in_progress'
		| 'neutral'
		| 'queued'
		| 'requested'
		| 'skipped'
		| 'stale'
		| 'success'
		| 'timed_out'
		| 'waiting';
	per_page?: number;
	page?: number;
}

export interface ActionsListWorkflowRunsPathParams {
	owner: string;
	repo: string;
	workflow_id: number & string;
}

export interface ActionsListWorkflowRunsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListWorkflowRunsPathParams {
	queryParams: ActionsListWorkflowRunsQueryParams;
}

export async function actionsListWorkflowRuns(props: ActionsListWorkflowRunsProps) {
	const { owner, repo, workflow_id, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/workflows/${workflow_id}/runs`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}