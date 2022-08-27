export interface ActionsListRepoWorkflowsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActionsListRepoWorkflowsPathParams {
	owner: string;
	repo: string;
}

export interface ActionsListRepoWorkflowsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListRepoWorkflowsPathParams {
	queryParams: ActionsListRepoWorkflowsQueryParams;
}

export async function actionsListRepoWorkflows(props: ActionsListRepoWorkflowsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/workflows`, {
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
