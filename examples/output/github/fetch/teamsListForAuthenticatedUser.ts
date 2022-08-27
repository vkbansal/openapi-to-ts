/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface TeamsListForAuthenticatedUserQueryParams {
	per_page?: number;
	page?: number;
}

export interface TeamsListForAuthenticatedUserProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: TeamsListForAuthenticatedUserQueryParams;
}

export async function teamsListForAuthenticatedUser(props: TeamsListForAuthenticatedUserProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/teams`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}