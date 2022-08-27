export interface ActionsDisableWorkflowPathParams {
	owner: string;
	repo: string;
	workflow_id: number & string;
}

export interface ActionsDisableWorkflowProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDisableWorkflowPathParams {}

export async function actionsDisableWorkflow(props: ActionsDisableWorkflowProps) {
	const { owner, repo, workflow_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/workflows/${workflow_id}/disable`, {
		method: 'PUT',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
