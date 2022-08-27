export interface OrgsListQueryParams {
	since?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
}

export interface OrgsListProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: OrgsListQueryParams;
}

export async function orgsList(props: OrgsListProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/organizations`, {
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
