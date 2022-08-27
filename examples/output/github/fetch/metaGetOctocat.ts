/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface MetaGetOctocatQueryParams {
	s?: string;
}

export interface MetaGetOctocatProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: MetaGetOctocatQueryParams;
}

export async function metaGetOctocat(props: MetaGetOctocatProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/octocat`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}