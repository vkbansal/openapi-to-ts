export interface TeamsListPendingInvitationsInOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface TeamsListPendingInvitationsInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListPendingInvitationsInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListPendingInvitationsInOrgPathParams {
	queryParams: TeamsListPendingInvitationsInOrgQueryParams;
}

export async function teamsListPendingInvitationsInOrg(
	props: TeamsListPendingInvitationsInOrgProps,
) {
	const { org, team_slug, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/invitations`, {
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
