export interface TeamsGetLegacyPathParams {
	team_id: number;
}

export interface TeamsGetLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsGetLegacyPathParams {}

export async function teamsGetLegacy(props: TeamsGetLegacyProps) {
	const { team_id, ...rest } = props;

	const response = await fetch(`/teams/${team_id}`, {
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
