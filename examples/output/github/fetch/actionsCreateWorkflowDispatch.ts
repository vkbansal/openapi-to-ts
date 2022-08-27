export interface ActionsCreateWorkflowDispatchPathParams {
	owner: string;
	repo: string;
	workflow_id: number & string;
}

export interface ActionsCreateWorkflowDispatchRequestBody {
	/**
	 * Input keys and values configured in the workflow file. The maximum number of properties is 10. Any default properties configured in the workflow file will be used when `inputs` are omitted.
	 */
	inputs?: { '[key: string]'?: string };
	/**
	 * The git reference for the workflow. The reference can be a branch or tag name.
	 */
	ref: string;
}

export interface ActionsCreateWorkflowDispatchProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsCreateWorkflowDispatchPathParams {
	body: ActionsCreateWorkflowDispatchRequestBody;
}

export async function actionsCreateWorkflowDispatch(props: ActionsCreateWorkflowDispatchProps) {
	const { owner, repo, workflow_id, body, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/actions/workflows/${workflow_id}/dispatches`,
		{
			method: 'POST',
			body: JSON.stringify(body),
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
