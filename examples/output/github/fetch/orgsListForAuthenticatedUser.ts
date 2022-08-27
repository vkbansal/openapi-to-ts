export interface OrgsListForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface OrgsListForAuthenticatedUserProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: OrgsListForAuthenticatedUserQueryParams;
}

export async function orgsListForAuthenticatedUser(props: OrgsListForAuthenticatedUserProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/orgs`, {
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
