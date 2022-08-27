export interface SearchLabelsQueryParams {
	repository_id: number;
	q: string;
	sort?: 'created' | 'updated';
	/**
	 * @default "desc"
	 */
	order?: 'asc' | 'desc';
}

export interface SearchLabelsProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: SearchLabelsQueryParams;
}

export async function searchLabels(props: SearchLabelsProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/search/labels`, {
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
