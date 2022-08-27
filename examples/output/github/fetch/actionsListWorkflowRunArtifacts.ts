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

export interface ActionsListWorkflowRunArtifactsPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsListWorkflowRunArtifactsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListWorkflowRunArtifactsPathParams {
	queryParams: ActionsListWorkflowRunArtifactsQueryParams;
}

export async function actionsListWorkflowRunArtifacts(props: ActionsListWorkflowRunArtifactsProps) {
	const { owner, repo, run_id, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runs/${run_id}/artifacts`, {
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
