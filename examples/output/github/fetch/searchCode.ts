/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface SearchCodeQueryParams {
	q: string;
	sort?: 'indexed';
	order?: 'asc' | 'desc';
	per_page?: number;
	page?: number;
}

export interface SearchCodeProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: SearchCodeQueryParams;
}

export async function searchCode(props: SearchCodeProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/search/code`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}