export interface ActionsDeleteWorkflowRunLogsPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsDeleteWorkflowRunLogsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDeleteWorkflowRunLogsPathParams {}

export async function actionsDeleteWorkflowRunLogs(props: ActionsDeleteWorkflowRunLogsProps) {
	const { owner, repo, run_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runs/${run_id}/logs`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
