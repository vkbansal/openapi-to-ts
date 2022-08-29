/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface TeamsRemoveProjectInOrgPathParams {
	org: string;
	team_slug: string;
	project_id: number;
}

export interface TeamsRemoveProjectInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsRemoveProjectInOrgPathParams {}

/**
 * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
 */
export async function teamsRemoveProjectInOrg(props: TeamsRemoveProjectInOrgProps) {
	const { org, team_slug, project_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/orgs/${org}/teams/${team_slug}/projects/${project_id}`,
		method: 'DELETE',
		...rest,
	});
}
