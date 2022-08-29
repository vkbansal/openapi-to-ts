/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActionsDeleteSelfHostedRunnerFromRepoPathParams {
	owner: string;
	repo: string;
	runner_id: number;
}

export interface ActionsDeleteSelfHostedRunnerFromRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDeleteSelfHostedRunnerFromRepoPathParams {}

/**
 * Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
 *
 * You must authenticate using an access token with the `repo`
 * scope to use this endpoint.
 */
export async function actionsDeleteSelfHostedRunnerFromRepo(
	props: ActionsDeleteSelfHostedRunnerFromRepoProps,
) {
	const { owner, repo, runner_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/actions/runners/${runner_id}`,
		method: 'DELETE',
		...rest,
	});
}
