export interface TeamsDeleteInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsDeleteInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsDeleteInOrgPathParams {}

export async function teamsDeleteInOrg(props: TeamsDeleteInOrgProps) {
	const { org, team_slug, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}`, {
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
