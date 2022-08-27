export interface GistsListCommitsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface GistsListCommitsPathParams {
	gist_id: string;
}

export interface GistsListCommitsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GistsListCommitsPathParams {
	queryParams: GistsListCommitsQueryParams;
}

export async function gistsListCommits(props: GistsListCommitsProps) {
	const { gist_id, queryParams, ...rest } = props;

	const response = await fetch(`/gists/${gist_id}/commits`, {
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
