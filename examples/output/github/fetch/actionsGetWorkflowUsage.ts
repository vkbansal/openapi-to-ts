export interface ActionsGetWorkflowUsagePathParams {
	owner: string;
	repo: string;
	workflow_id: number & string;
}

export interface ActionsGetWorkflowUsageProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetWorkflowUsagePathParams {}

export async function actionsGetWorkflowUsage(props: ActionsGetWorkflowUsageProps) {
	const { owner, repo, workflow_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/workflows/${workflow_id}/timing`, {
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
