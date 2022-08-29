/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface GistsListForksPathParams {
	gist_id: string;
}

export interface GistsListForksQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface GistsListForksProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GistsListForksPathParams {
	queryParams: GistsListForksQueryParams;
}

/**
 *
 */
export async function gistsListForks(props: GistsListForksProps) {
	const { gist_id, queryParams, ...rest } = props;

	const response = await fetch(`/gists/${gist_id}/forks`, {
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
