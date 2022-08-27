/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface GistsListStarredQueryParams {
	since?: string;
	per_page?: number;
	page?: number;
}

export interface GistsListStarredProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: GistsListStarredQueryParams;
}

export async function gistsListStarred(props: GistsListStarredProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/gists/starred`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
