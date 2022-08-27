/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface TeamsListProjectsLegacyQueryParams {
	per_page?: number;
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
	});

	const json = await response.json();

	return json;
}