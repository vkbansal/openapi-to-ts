export interface TeamsListMembersInOrgQueryParams {
	/**
	 * @default "all"
	 */
	role?: 'all' | 'maintainer' | 'member';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface TeamsListMembersInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListMembersInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListMembersInOrgPathParams {
	queryParams: TeamsListMembersInOrgQueryParams;
}

export async function teamsListMembersInOrg(props: TeamsListMembersInOrgProps) {
	const { org, team_slug, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/members`, {
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
