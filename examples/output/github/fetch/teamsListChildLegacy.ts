export interface TeamsListChildLegacyQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface TeamsListChildLegacyPathParams {
	team_id: number;
}

export interface TeamsListChildLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListChildLegacyPathParams {
	queryParams: TeamsListChildLegacyQueryParams;
}

export async function teamsListChildLegacy(props: TeamsListChildLegacyProps) {
	const { team_id, queryParams, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/teams`, {
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
