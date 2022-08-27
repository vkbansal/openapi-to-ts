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
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
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
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
