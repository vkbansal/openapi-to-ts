export interface TeamsAddOrUpdateMembershipForUserLegacyPathParams {
	team_id: number;
	username: string;
}

export interface TeamsAddOrUpdateMembershipForUserLegacyRequestBody {
	/**
	 * The role that this user should have in the team. Can be one of:
	 * \* `member` - a normal member of the team.
	 * \* `maintainer` - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description.
	 * @default "member"
	 */
	role?: 'maintainer' | 'member';
}

export interface TeamsAddOrUpdateMembershipForUserLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsAddOrUpdateMembershipForUserLegacyPathParams {
	body: TeamsAddOrUpdateMembershipForUserLegacyRequestBody;
}

export async function teamsAddOrUpdateMembershipForUserLegacy(
	props: TeamsAddOrUpdateMembershipForUserLegacyProps,
) {
	const { team_id, username, body, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/memberships/${username}`, {
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
