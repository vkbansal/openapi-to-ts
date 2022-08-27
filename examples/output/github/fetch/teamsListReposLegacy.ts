export interface TeamsListReposLegacyQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface TeamsListReposLegacyPathParams {
	team_id: number;
}

export interface TeamsListReposLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListReposLegacyPathParams {
	queryParams: TeamsListReposLegacyQueryParams;
}

export async function teamsListReposLegacy(props: TeamsListReposLegacyProps) {
	const { team_id, queryParams, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/repos`, {
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
