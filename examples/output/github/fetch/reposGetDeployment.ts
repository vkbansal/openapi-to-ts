/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposGetDeploymentPathParams {
	owner: string;
	repo: string;
	deployment_id: number;
}

export interface ReposGetDeploymentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetDeploymentPathParams {}

/**
 *
 */
export async function reposGetDeployment(props: ReposGetDeploymentProps) {
	const { owner, repo, deployment_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/deployments/${deployment_id}`,
		method: 'GET',
		...rest,
	});
}
