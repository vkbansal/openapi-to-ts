export interface TeamsRemoveMembershipForUserInOrgPathParams {
	org: string;
	team_slug: string;
	username: string;
}

export interface TeamsRemoveMembershipForUserInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsRemoveMembershipForUserInOrgPathParams {}

export async function teamsRemoveMembershipForUserInOrg(
	props: TeamsRemoveMembershipForUserInOrgProps,
) {
	const { org, team_slug, username, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/memberships/${username}`, {
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
