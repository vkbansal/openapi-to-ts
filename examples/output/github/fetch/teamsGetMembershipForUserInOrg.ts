export interface TeamsGetMembershipForUserInOrgPathParams {
	org: string;
	team_slug: string;
	username: string;
}

export interface TeamsGetMembershipForUserInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsGetMembershipForUserInOrgPathParams {}

export async function teamsGetMembershipForUserInOrg(props: TeamsGetMembershipForUserInOrgProps) {
	const { org, team_slug, username, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/memberships/${username}`, {
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
