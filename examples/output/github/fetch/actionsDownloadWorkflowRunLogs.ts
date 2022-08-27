export interface ActionsDownloadWorkflowRunLogsPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsDownloadWorkflowRunLogsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDownloadWorkflowRunLogsPathParams {}

export async function actionsDownloadWorkflowRunLogs(props: ActionsDownloadWorkflowRunLogsProps) {
	const { owner, repo, run_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runs/${run_id}/logs`, {
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
