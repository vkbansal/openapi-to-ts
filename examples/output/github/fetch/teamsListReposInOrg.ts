export interface TeamsListReposInOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface TeamsListReposInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListReposInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListReposInOrgPathParams {
	queryParams: TeamsListReposInOrgQueryParams;
}

export async function teamsListReposInOrg(props: TeamsListReposInOrgProps) {
	const { org, team_slug, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/repos`, {
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
