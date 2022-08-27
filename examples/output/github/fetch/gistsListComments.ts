export interface GistsListCommentsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface GistsListCommentsPathParams {
	gist_id: string;
}

export interface GistsListCommentsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GistsListCommentsPathParams {
	queryParams: GistsListCommentsQueryParams;
}

export async function gistsListComments(props: GistsListCommentsProps) {
	const { gist_id, queryParams, ...rest } = props;

	const response = await fetch(`/gists/${gist_id}/comments`, {
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
