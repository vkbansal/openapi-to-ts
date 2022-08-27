export interface TeamsListChildInOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface TeamsListChildInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListChildInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListChildInOrgPathParams {
	queryParams: TeamsListChildInOrgQueryParams;
}

export async function teamsListChildInOrg(props: TeamsListChildInOrgProps) {
	const { org, team_slug, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/teams`, {
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
