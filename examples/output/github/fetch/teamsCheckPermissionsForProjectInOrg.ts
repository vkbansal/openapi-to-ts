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

export async function teamsCheckPermissionsForProjectInOrg(
	props: TeamsCheckPermissionsForProjectInOrgProps,
) {
	const { org, team_slug, project_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/projects/${project_id}`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
