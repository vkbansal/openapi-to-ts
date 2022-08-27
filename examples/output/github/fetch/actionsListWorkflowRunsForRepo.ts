export interface ActionsListWorkflowRunsForRepoQueryParams {
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

export interface ActionsListWorkflowRunsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActionsListWorkflowRunsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListWorkflowRunsForRepoPathParams {
	queryParams: ActionsListWorkflowRunsForRepoQueryParams;
}

export async function actionsListWorkflowRunsForRepo(props: ActionsListWorkflowRunsForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runs`, {
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
