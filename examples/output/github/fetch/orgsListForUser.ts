export interface OrgsListForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface OrgsListForUserPathParams {
	username: string;
}

export interface OrgsListForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsListForUserPathParams {
	queryParams: OrgsListForUserQueryParams;
}

export async function orgsListForUser(props: OrgsListForUserProps) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/orgs`, {
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
