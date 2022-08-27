export interface GistsListForUserQueryParams {
	since?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface GistsListForUserPathParams {
	username: string;
}

export interface GistsListForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GistsListForUserPathParams {
	queryParams: GistsListForUserQueryParams;
}

export async function gistsListForUser(props: GistsListForUserProps) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/gists`, {
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
