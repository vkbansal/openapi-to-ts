/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposDeleteDeploymentPathParams {
	owner: string;
	repo: string;
	deployment_id: number;
}

export interface ReposDeleteDeploymentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeleteDeploymentPathParams {}

/**
 * To ensure there can always be an active deployment, you can only delete an _inactive_ deployment. Anyone with `repo` or `repo_deployment` scopes can delete an inactive deployment.
 *
 * To set a deployment as inactive, you must:
 *
 * *   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
 * *   Mark the active deployment as inactive by adding any non-successful deployment status.
 *
 * For more information, see "[Create a deployment](https://docs.github.com/rest/reference/repos/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/rest/reference/repos#create-a-deployment-status)."
 */
export async function reposDeleteDeployment(props: ReposDeleteDeploymentProps) {
	const { owner, repo, deployment_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/deployments/${deployment_id}`,
		method: 'DELETE',
		...rest,
	});
}
