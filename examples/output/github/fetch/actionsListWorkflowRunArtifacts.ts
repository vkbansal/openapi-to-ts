/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActionsListWorkflowRunArtifactsPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsListWorkflowRunArtifactsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActionsListWorkflowRunArtifactsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListWorkflowRunArtifactsPathParams {
	queryParams: ActionsListWorkflowRunArtifactsQueryParams;
	paramsSerializer?: (params: ActionsListWorkflowRunArtifactsQueryParams) => string;
}

/**
 * Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 */
export async function actionsListWorkflowRunArtifacts(props: ActionsListWorkflowRunArtifactsProps) {
	const { owner, repo, run_id, ...rest } = props;

	return _fetcher<unknown, ActionsListWorkflowRunArtifactsQueryParams, unknown>({
		path: `/repos/${owner}/${repo}/actions/runs/${run_id}/artifacts`,
		method: 'GET',
		...rest,
	});
}
