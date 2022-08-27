export interface TeamsDeleteLegacyPathParams {
	team_id: number;
}

export interface TeamsDeleteLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsDeleteLegacyPathParams {}

export async function teamsDeleteLegacy(props: TeamsDeleteLegacyProps) {
	const { team_id, ...rest } = props;

	const response = await fetch(`/teams/${team_id}`, {
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
