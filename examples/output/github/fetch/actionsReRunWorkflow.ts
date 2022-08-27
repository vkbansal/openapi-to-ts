export interface ActionsReRunWorkflowPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsReRunWorkflowProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsReRunWorkflowPathParams {}

export async function actionsReRunWorkflow(props: ActionsReRunWorkflowProps) {
	const { owner, repo, run_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runs/${run_id}/rerun`, {
		method: 'POST',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
