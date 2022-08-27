export interface ActionsGetWorkflowRunUsagePathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsGetWorkflowRunUsageProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetWorkflowRunUsagePathParams {}

export async function actionsGetWorkflowRunUsage(props: ActionsGetWorkflowRunUsageProps) {
	const { owner, repo, run_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runs/${run_id}/timing`, {
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
