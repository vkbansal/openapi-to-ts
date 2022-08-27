export interface SearchTopicsQueryParams {
	q: string;
}

export interface SearchTopicsProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: SearchTopicsQueryParams;
}

export async function searchTopics(props: SearchTopicsProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/search/topics`, {
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
