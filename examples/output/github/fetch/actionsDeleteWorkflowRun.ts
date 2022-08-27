/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActionsDeleteWorkflowRunPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsDeleteWorkflowRunProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDeleteWorkflowRunPathParams {}

export async function actionsDeleteWorkflowRun(props: ActionsDeleteWorkflowRunProps) {
	const { owner, repo, run_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runs/${run_id}`, {
		method: 'DELETE',
		...rest,
	});

	const json = await response.json();

	return json;
}
