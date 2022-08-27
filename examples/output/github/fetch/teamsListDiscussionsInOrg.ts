export interface TeamsListDiscussionsInOrgQueryParams {
	/**
	 * @default "desc"
	 */
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
	pinned?: string;
}

export interface TeamsListDiscussionsInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListDiscussionsInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListDiscussionsInOrgPathParams {
	queryParams: TeamsListDiscussionsInOrgQueryParams;
}

export async function teamsListDiscussionsInOrg(props: TeamsListDiscussionsInOrgProps) {
	const { org, team_slug, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/discussions`, {
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
