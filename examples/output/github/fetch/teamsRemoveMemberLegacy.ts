export interface TeamsRemoveMemberLegacyPathParams {
	team_id: number;
	username: string;
}

export interface TeamsRemoveMemberLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsRemoveMemberLegacyPathParams {}

export async function teamsRemoveMemberLegacy(props: TeamsRemoveMemberLegacyProps) {
	const { team_id, username, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/members/${username}`, {
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
