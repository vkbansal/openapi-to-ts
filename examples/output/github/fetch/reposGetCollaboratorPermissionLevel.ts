/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposGetCollaboratorPermissionLevelPathParams {
	owner: string;
	repo: string;
	username: string;
}

export interface ReposGetCollaboratorPermissionLevelProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetCollaboratorPermissionLevelPathParams {}

/**
 * Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.
 */
export async function reposGetCollaboratorPermissionLevel(
	props: ReposGetCollaboratorPermissionLevelProps,
) {
	const { owner, repo, username, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/collaborators/${username}/permission`,
		method: 'GET',
		...rest,
	});
}
