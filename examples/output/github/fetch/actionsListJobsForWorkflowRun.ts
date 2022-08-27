export interface ActionsListJobsForWorkflowRunQueryParams {
	/**
	 * @default "latest"
	 */
	filter?: 'all' | 'latest';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActionsListJobsForWorkflowRunPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsListJobsForWorkflowRunProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListJobsForWorkflowRunPathParams {
	queryParams: ActionsListJobsForWorkflowRunQueryParams;
}

export async function actionsListJobsForWorkflowRun(props: ActionsListJobsForWorkflowRunProps) {
	const { owner, repo, run_id, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runs/${run_id}/jobs`, {
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
