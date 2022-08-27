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
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
