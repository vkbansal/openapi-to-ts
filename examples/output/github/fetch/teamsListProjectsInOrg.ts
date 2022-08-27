export interface TeamsListProjectsInOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface TeamsListProjectsInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListProjectsInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListProjectsInOrgPathParams {
	queryParams: TeamsListProjectsInOrgQueryParams;
}

export async function teamsListProjectsInOrg(props: TeamsListProjectsInOrgProps) {
	const { org, team_slug, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/projects`, {
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
