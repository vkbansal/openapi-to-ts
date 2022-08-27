export interface TeamsListProjectsLegacyQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface TeamsListProjectsLegacyPathParams {
	team_id: number;
}

export interface TeamsListProjectsLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListProjectsLegacyPathParams {
	queryParams: TeamsListProjectsLegacyQueryParams;
}

export async function teamsListProjectsLegacy(props: TeamsListProjectsLegacyProps) {
	const { team_id, queryParams, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/projects`, {
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
