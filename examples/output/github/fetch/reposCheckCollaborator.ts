/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposCheckCollaboratorPathParams {
	owner: string;
	repo: string;
	username: string;
}

export interface ReposCheckCollaboratorProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCheckCollaboratorPathParams {}

/**
 * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
 *
 * Team members will include the members of child teams.
 */
export async function reposCheckCollaborator(props: ReposCheckCollaboratorProps) {
	const { owner, repo, username, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/collaborators/${username}`,
		method: 'GET',
		...rest,
	});
}
