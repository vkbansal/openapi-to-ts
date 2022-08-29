/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface TeamsAddOrUpdateProjectPermissionsInOrgPathParams {
	org: string;
	team_slug: string;
	project_id: number;
}

export interface TeamsAddOrUpdateProjectPermissionsInOrgRequestBody {
	/**
	 * The permission to grant to the team for this project. Can be one of:
	 * \* `read` - team members can read, but not write to or administer this project.
	 * \* `write` - team members can read and write, but not administer this project.
	 * \* `admin` - team members can read, write and administer this project.
	 * Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
	 */
	permission?: 'admin' | 'read' | 'write';
}

export interface TeamsAddOrUpdateProjectPermissionsInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsAddOrUpdateProjectPermissionsInOrgPathParams {
	body: TeamsAddOrUpdateProjectPermissionsInOrgRequestBody;
}

/**
 * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
 */
export async function teamsAddOrUpdateProjectPermissionsInOrg(
	props: TeamsAddOrUpdateProjectPermissionsInOrgProps,
) {
	const { org, team_slug, project_id, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/projects/${project_id}`, {
		method: 'PUT',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
