/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface TeamsListDiscussionsLegacyQueryParams {
	direction?: 'asc' | 'desc';
	per_page?: number;
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
	});

	const json = await response.json();

	return json;
}