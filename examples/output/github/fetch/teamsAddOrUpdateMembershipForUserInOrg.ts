export interface TeamsAddOrUpdateMembershipForUserInOrgPathParams {
	org: string;
	team_slug: string;
	username: string;
}

export interface TeamsAddOrUpdateMembershipForUserInOrgRequestBody {
	/**
	 * The role that this user should have in the team. Can be one of:
	 * \* `member` - a normal member of the team.
	 * \* `maintainer` - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description.
	 * @default "member"
	 */
	role?: 'maintainer' | 'member';
}

export interface TeamsAddOrUpdateMembershipForUserInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsAddOrUpdateMembershipForUserInOrgPathParams {
	body: TeamsAddOrUpdateMembershipForUserInOrgRequestBody;
}

export async function teamsAddOrUpdateMembershipForUserInOrg(
	props: TeamsAddOrUpdateMembershipForUserInOrgProps,
) {
	const { org, team_slug, username, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/memberships/${username}`, {
		method: 'PUT',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
