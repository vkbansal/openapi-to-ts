export interface TeamsAddMemberLegacyPathParams {
	team_id: number;
	username: string;
}

export interface TeamsAddMemberLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsAddMemberLegacyPathParams {}

export async function teamsAddMemberLegacy(props: TeamsAddMemberLegacyProps) {
	const { team_id, username, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/members/${username}`, {
		method: 'PUT',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
