export interface ActionsGetJobForWorkflowRunPathParams {
	owner: string;
	repo: string;
	job_id: number;
}

export interface ActionsGetJobForWorkflowRunProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetJobForWorkflowRunPathParams {}

export async function actionsGetJobForWorkflowRun(props: ActionsGetJobForWorkflowRunProps) {
	const { owner, repo, job_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/jobs/${job_id}`, {
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
