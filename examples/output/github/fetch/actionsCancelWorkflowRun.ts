export interface ActionsCancelWorkflowRunPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsCancelWorkflowRunProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsCancelWorkflowRunPathParams {}

export async function actionsCancelWorkflowRun(props: ActionsCancelWorkflowRunProps) {
	const { owner, repo, run_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runs/${run_id}/cancel`, {
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
