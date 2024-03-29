/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ChecksGetPathParams {
	owner: string;
	repo: string;
	check_run_id: number;
}

export interface ChecksGetProps extends Omit<RequestInit, 'method' | 'body'>, ChecksGetPathParams {}

/**
 * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
 *
 * Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
 */
export async function checksGet(props: ChecksGetProps) {
	const { owner, repo, check_run_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/check-runs/${check_run_id}`,
		method: 'GET',
		...rest,
	});
}
