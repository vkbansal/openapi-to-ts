/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposRemoveCollaboratorPathParams {
	owner: string;
	repo: string;
	username: string;
}

export interface ReposRemoveCollaboratorProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposRemoveCollaboratorPathParams {}

/**
 *
 */
export async function reposRemoveCollaborator(props: ReposRemoveCollaboratorProps) {
	const { owner, repo, username, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/collaborators/${username}`,
		method: 'DELETE',
		...rest,
	});
}
