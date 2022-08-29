/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ActionsListRepoWorkflowsPathParams {
	owner: string;
	repo: string;
}

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

export interface ActionsListRepoWorkflowsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListRepoWorkflowsPathParams {
	queryParams: ActionsListRepoWorkflowsQueryParams;
}

/**
 * Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 */
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
