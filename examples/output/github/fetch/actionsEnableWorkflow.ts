/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActionsEnableWorkflowPathParams {
	owner: string;
	repo: string;
	workflow_id: number & string;
}

export interface ActionsEnableWorkflowProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsEnableWorkflowPathParams {}

export async function actionsEnableWorkflow(props: ActionsEnableWorkflowProps) {
	const { owner, repo, workflow_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/workflows/${workflow_id}/enable`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}
