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
