/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ActionsListWorkflowRunsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActionsListWorkflowRunsForRepoQueryParams {
	actor?: string;
	branch?: string;
	event?: string;
	status?:
		| 'action_required'
		| 'cancelled'
		| 'completed'
		| 'failure'
		| 'in_progress'
		| 'neutral'
		| 'queued'
		| 'requested'
		| 'skipped'
		| 'stale'
		| 'success'
		| 'timed_out'
		| 'waiting';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActionsListWorkflowRunsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListWorkflowRunsForRepoPathParams {
	queryParams: ActionsListWorkflowRunsForRepoQueryParams;
}

/**
 * Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
 *
 * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 */
export async function actionsListWorkflowRunsForRepo(props: ActionsListWorkflowRunsForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runs`, {
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
