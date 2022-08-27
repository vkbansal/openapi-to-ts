export interface TeamsGetByNamePathParams {
	org: string;
	team_slug: string;
}

export interface TeamsGetByNameProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsGetByNamePathParams {}

export async function teamsGetByName(props: TeamsGetByNameProps) {
	const { org, team_slug, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}`, {
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
