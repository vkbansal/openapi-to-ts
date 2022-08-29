/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface TeamsCheckPermissionsForProjectInOrgPathParams {
	org: string;
	team_slug: string;
	project_id: number;
}

export interface TeamsCheckPermissionsForProjectInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsCheckPermissionsForProjectInOrgPathParams {}

/**
 * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
 */
export async function teamsCheckPermissionsForProjectInOrg(
	props: TeamsCheckPermissionsForProjectInOrgProps,
) {
	const { org, team_slug, project_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/projects/${project_id}`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
