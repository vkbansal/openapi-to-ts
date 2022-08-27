export interface TeamsListIdpGroupsForOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	page?: string;
}

export interface TeamsListIdpGroupsForOrgPathParams {
	org: string;
}

export interface TeamsListIdpGroupsForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListIdpGroupsForOrgPathParams {
	queryParams: TeamsListIdpGroupsForOrgQueryParams;
}

export async function teamsListIdpGroupsForOrg(props: TeamsListIdpGroupsForOrgProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/team-sync/groups`, {
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
