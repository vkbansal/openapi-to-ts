/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface TeamsRemoveProjectLegacyPathParams {
	team_id: number;
	project_id: number;
}

export interface TeamsRemoveProjectLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsRemoveProjectLegacyPathParams {}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://docs.github.com/rest/reference/teams#remove-a-project-from-a-team) endpoint.
 *
 * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
 * @deprecated
 */
export async function teamsRemoveProjectLegacy(props: TeamsRemoveProjectLegacyProps) {
	const { team_id, project_id, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/projects/${project_id}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
