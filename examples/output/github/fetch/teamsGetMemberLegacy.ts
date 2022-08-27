export interface TeamsGetMemberLegacyPathParams {
	team_id: number;
	username: string;
}

export interface TeamsGetMemberLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsGetMemberLegacyPathParams {}

export async function teamsGetMemberLegacy(props: TeamsGetMemberLegacyProps) {
	const { team_id, username, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/members/${username}`, {
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
