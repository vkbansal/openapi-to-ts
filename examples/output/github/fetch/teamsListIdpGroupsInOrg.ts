export interface TeamsListIdpGroupsInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListIdpGroupsInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListIdpGroupsInOrgPathParams {}

export async function teamsListIdpGroupsInOrg(props: TeamsListIdpGroupsInOrgProps) {
	const { org, team_slug, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/team-sync/group-mappings`, {
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
