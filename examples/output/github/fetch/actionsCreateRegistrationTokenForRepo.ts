/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActionsCreateRegistrationTokenForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActionsCreateRegistrationTokenForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsCreateRegistrationTokenForRepoPathParams {}

/**
 * Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
 * using an access token with the `repo` scope to use this endpoint.
 *
 * #### Example using registration token
 *
 * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
 *
 * ```
 * ./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN
 * ```
 */
export async function actionsCreateRegistrationTokenForRepo(
	props: ActionsCreateRegistrationTokenForRepoProps,
) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/actions/runners/registration-token`,
		method: 'POST',
		...rest,
	});
}
