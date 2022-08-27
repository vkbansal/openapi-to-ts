export interface ActionsGetWorkflowRunPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsGetWorkflowRunProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetWorkflowRunPathParams {}

export async function actionsGetWorkflowRun(props: ActionsGetWorkflowRunProps) {
	const { owner, repo, run_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runs/${run_id}`, {
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
