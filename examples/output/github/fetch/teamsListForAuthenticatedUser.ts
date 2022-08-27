export interface TeamsListForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
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
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
