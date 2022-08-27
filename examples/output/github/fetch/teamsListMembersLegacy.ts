export interface TeamsListMembersLegacyQueryParams {
	/**
	 * @default "all"
	 */
	role?: 'all' | 'maintainer' | 'member';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface TeamsListMembersLegacyPathParams {
	team_id: number;
}

export interface TeamsListMembersLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListMembersLegacyPathParams {
	queryParams: TeamsListMembersLegacyQueryParams;
}

export async function teamsListMembersLegacy(props: TeamsListMembersLegacyProps) {
	const { team_id, queryParams, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/members`, {
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
