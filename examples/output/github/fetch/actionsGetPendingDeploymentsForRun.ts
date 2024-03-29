/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActionsGetPendingDeploymentsForRunPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsGetPendingDeploymentsForRunProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetPendingDeploymentsForRunPathParams {}

/**
 * Get all deployment environments for a workflow run that are waiting for protection rules to pass.
 *
 * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 */
export async function actionsGetPendingDeploymentsForRun(
	props: ActionsGetPendingDeploymentsForRunProps,
) {
	const { owner, repo, run_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/actions/runs/${run_id}/pending_deployments`,
		method: 'GET',
		...rest,
	});
}
