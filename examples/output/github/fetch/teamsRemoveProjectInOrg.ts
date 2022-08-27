export interface TeamsRemoveProjectInOrgPathParams {
	org: string;
	team_slug: string;
	project_id: number;
}

export interface TeamsRemoveProjectInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsRemoveProjectInOrgPathParams {}

export async function teamsRemoveProjectInOrg(props: TeamsRemoveProjectInOrgProps) {
	const { org, team_slug, project_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/projects/${project_id}`, {
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
