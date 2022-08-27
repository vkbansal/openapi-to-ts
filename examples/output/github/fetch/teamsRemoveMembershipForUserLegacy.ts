export interface TeamsRemoveMembershipForUserLegacyPathParams {
	team_id: number;
	username: string;
}

export interface TeamsRemoveMembershipForUserLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsRemoveMembershipForUserLegacyPathParams {}

export async function teamsRemoveMembershipForUserLegacy(
	props: TeamsRemoveMembershipForUserLegacyProps,
) {
	const { team_id, username, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/memberships/${username}`, {
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
