export interface TeamsListDiscussionsLegacyQueryParams {
	/**
	 * @default "desc"
	 */
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface TeamsListDiscussionsLegacyPathParams {
	team_id: number;
}

export interface TeamsListDiscussionsLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListDiscussionsLegacyPathParams {
	queryParams: TeamsListDiscussionsLegacyQueryParams;
}

export async function teamsListDiscussionsLegacy(props: TeamsListDiscussionsLegacyProps) {
	const { team_id, queryParams, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/discussions`, {
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
