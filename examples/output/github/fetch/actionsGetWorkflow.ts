export interface ActionsGetWorkflowPathParams {
	owner: string;
	repo: string;
	workflow_id: number & string;
}

export interface ActionsGetWorkflowProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetWorkflowPathParams {}

export async function actionsGetWorkflow(props: ActionsGetWorkflowProps) {
	const { owner, repo, workflow_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/workflows/${workflow_id}`, {
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
