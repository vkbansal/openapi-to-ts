export interface TeamsGetMembershipForUserLegacyPathParams {
	team_id: number;
	username: string;
}

export interface TeamsGetMembershipForUserLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsGetMembershipForUserLegacyPathParams {}

export async function teamsGetMembershipForUserLegacy(props: TeamsGetMembershipForUserLegacyProps) {
	const { team_id, username, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/memberships/${username}`, {
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
